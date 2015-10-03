import os
import sys
import fileinput

f = open('/Users/lizzi/Documents/sites/intro-2-js/data/bigfoots_allYears.json','r')
filedata = f.read()
f.close()

removefirstline = filedata.replace('row_to_json','bigfoots = ')
openbracketreplace = removefirstline.replace('"[','[')
closebracketreplace = openbracketreplace.replace(']"',']')
newdata = closebracketreplace

f = open('/Users/lizzi/Documents/sites/intro-2-js/data/bigfoots_allYears_clean.json','w')
f.write(newdata)
f.close()
