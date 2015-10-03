import sys
import csv

def parse():
    sightings = []
    desc = {}

    with open('/Users/lizzi/Documents/sites/intro-2-js/data/bigfoots.csv', 'r') as bigfoots:
        reader = csv.reader(bigfoots, delimiter='|', quoting=csv.QUOTE_NONE)
        headings = next(reader, None)

        for row in list(reader):
            try:
                x = dict(zip(headings, row))
                del x['county']
                del x['foldername']
                x['yr']  = int(x['reportdate'].split('-')[0])
                x['lat'] = float(x['lat'])
                x['lng'] = float(x['lng'])
                print str(x)+'\n'
                sightings.append(x)
            except:
                print('An Error Occured')
        bigfoots.close()

    with open('/Users/lizzi/Documents/sites/intro-2-js/data/bigfoots_formatted.js', 'w') as bigfootsJS:
        bigfootsJS.write('var bigfoots = ' + str(sightings) + ';')
        bigfootsJS.close()

    return "Task Complete\n--> Parsed " +str(len(sightings))+ " Records"


def start():
    print('Beginning Parsing Task')
    print(parse())
    exit()

start()
