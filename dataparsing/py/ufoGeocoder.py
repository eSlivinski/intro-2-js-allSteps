import sys
import csv
import itertools
from geopy.geocoders import Nominatim
from geopy.exc import GeocoderTimedOut
geolocator = Nominatim()

errorDictionary = {1 : {'msg':'State not Recognized', 'count': 0}, 2 : {'msg':'Geocode Timeout', 'count': 0}, 3 : {'msg':'Invalid Time', 'count': 0}, 4 : {'msg':'Invalid Geocode Response', 'count' : 0} }
states = ['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY']

spinner = itertools.cycle(['-', '/', '|', '\\'])
def spin(i):
    counter = str(i)
    characters = len(counter)+2
    clearstr = ''
    sys.stdout.write(spinner.next()+' '+counter)    # write the next character
    sys.stdout.flush()                      # flush stdout buffer (actual character display)
    for i in range(characters):
        clearstr+='\b'
    sys.stdout.write(clearstr)                # erase the last written char

jsfile = open('/Users/lizzi/Documents/sites/intro-2-js/automated.js', 'w')

def write(feature):
    fstring = str(features)
    jsfile.write(fstring + ',')
    jsfile.write('\n')
        # jsfile.write('var sightingsByState = ' + str(statesDictionary) + ';')


def printResults(features, statesDictionary):
    msg_results = ''
    msg_error = ''
    err_total = 0
    success_total = len(features)
    data_total = 0

    for err in errorDictionary:
        err_total = err_total + errorDictionary[err]['count']
        msg_error += '\n  CODE '+ str(err) + ' : ' + errorDictionary[err]['msg'] + ' -- ' + str(errorDictionary[err]['count'])

    data_total = err_total + success_total
    msg_results += '\nSUCCESSFUL GEOCODES : '+str(success_total) + '/' + str(data_total) + ' = ' + '{:.2%}'.format(float(success_total)/float(data_total))

    for s in statesDictionary:
        if statesDictionary[s] > 0:
            msg_results += '\n  '+ s + ':' + str(statesDictionary[s]) + ' {:.2%}'.format(float(statesDictionary[s])/float(success_total))

    msg_results += '\nERRORS '+str(err_total) + '/' + str(data_total) + ' = ' + '{:.2%}'.format(float(err_total)/float(data_total))
    msg_results += msg_error
    return msg_results


def recieveErrors(errCode):
    errorDictionary[errCode]['count'] = errorDictionary[errCode]['count'] + 1

def geocode(statesDictionary):
    features = []
    with open('/Users/lizzi/Documents/sites/intro-2-js/data/ufo.csv', 'r') as csvfile:
        reader = csv.DictReader(csvfile)
        i=0
        for row in reader:
            i = i + 1
            # if i<20:
            spin(i)
            feature = {}
            try:
                statesDictionary[row['State']]
            except KeyError:
                recieveErrors(1)
            else:
                stateRef = row['State'][:]
                try:
                    location = geolocator.geocode(row['City']+','+row['State'])
                except GeocoderTimedOut as e:
                    recieveErrors(2)
                else:
                    try:
                        feature['geometry'] = {'lat': location.latitude, 'lon': location.longitude}
                    except AttributeError:
                        recieveErrors(4)
                    else:
                        # print 'foo'
                        if row['Date / Time'] == '':
                            recieveErrors(3)
                        else:
                            feature['properties'] = {'time': row['Date / Time'], 'id': str}
                            write(feature)
                            features.append(feature)
                            statesDictionary[stateRef] = statesDictionary[stateRef]+1
        csvfile.close()
        return features


def make_states_obj():
    statesDictionary = {}
    for state in states:
        statesDictionary[state] = 0
    return statesDictionary

def process():
    statesDictionary = make_states_obj()
    features = geocode(statesDictionary)
    # print(printResults(features, statesDictionary))
    print(write(features, statesDictionary))
    exit()

process()
