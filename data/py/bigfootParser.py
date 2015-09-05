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
                pairwise = zip(headings, row)
                del pairwise[0]
                del pairwise[3]
                pairwise[1] = ('id', pairwise[1][1].strip('Report '))
                lat = pairwise.pop(-1)
                pairwise[-1] =('latlng', [float(lat[1]), float(pairwise[-1][1])])
                x = dict(pairwise)

                year = x['reportdate'].split('-')[0]
                x['year'] = int(year)
                sightings.append(x)
            except:
                print('An Error Occured')
        print(str(sightings))
        bigfoots.close()

    with open('/Users/lizzi/Documents/sites/intro-2-js/data/bigfoots_formatted.js', 'w') as bigfootsJS:
        bigfootsJS.write('var bigfoots = ' + str(sightings) + ';')
        bigfootsJS.close()

    return "Task Complete\n-->Parsed " +str(len(sightings))+ " Records"


def start():
    print('Beginning Parsing Task')
    print(parse())
    exit()

start()
