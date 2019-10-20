import sys
import stdio
import math

#user can choose a reflectivity property of planet similar to:
#... Earth
#... Venus
#... Mars
#... Moon
#user can choose a atmospheric absorption property of planet similar to:
#...Normal    : Normal atmospheric composition of healthy Earth
#...Pollution : Large amount of CO2 emissions, present day Earth
#...Volcanic  : Conditions after a volcanic eruption, with large dust
#               amounts in the atmosphere
#...Nuclear   : The conditions after a nuclear, where very little
#               radiation reaches the surface due to soot in the air.


# radius of star input by user
#TEST VALUE: 6.963 * (10 ** 8)
# distance bet planet and star
#TEST VALUE: 1.496 * (10 ** 11)
# star's surface temperature
#TEST VALUE: 6000
#choose from Earth, Venus, Mars, Moon
#TEST VALUE: 0.31
#choose from Normal, Pollution, Volcanic, or Nuclear
#TEST VALUE: 0.26

#inserting test values should produce an answer approximately 250.

#provides appropriate albedo value for formula, based on user choice
#Rs = radius sun : dis = distance bet planet and star : Tsun = temp of star
#planetType = choose from Earth, Venus, Mars, Moon
#atmosphere = choose from Normal, Pollution, Volcanic, or Nuclear
def a(planetType):
    #Dictionary for albedo value aka reflectivity of surface
    reflectDict = {'Moon': 0.12, 'Mars': 0.29, 'Earth': 0.31, 'Venus': 0.75}
    for key in reflectDict:
        if key == planetType:
            return reflectDict[key] # TRYING TO RETURN VAL OF KEY NOT WORK

#provides appropriate beta value for formula based on user choice
def b(atmosphere):
    #Dictionary for beta aka atmosphere absorption
    atmDict = {'Normal': 0.26, 'Pollution': 0.26, 'Volcanic': 0.30, 'Nuclear': 0.75}
    for key in atmDict:
        if key == atmosphere:
            #return atmDict['Normal'] # TRYING TO RETURN VAL OF KEY NOT WORK
            return atmDict[atmosphere]


#print(a('Earth')) //for debugging: looking at what value or type it is
#print(b('Nuclear')) //for deugging: looking at what value or type it is


#Rs = radius sun : dis = distance bet planet and star : Tsun = temp of star
#type = choose from Earth, Venus, Mars, Moon
#atm = choose from Normal, Pollution, Volcanic, or Nuclear
def calcTemp(Rs, dis, Tsun, ptype, atm):
    #FORMULA*
    inner = math.pow((1 - a(ptype) - (b(atm)/2)), 0.5) / (2 * dis) 
    #PROBLEM ABOVE^: values, or data types, of a() and b() are "None"
    root = math.pow(Rs * inner, 0.5)
    T = Tsun * root
    #print(T)
    return T

#calcTemp(696300000, 149600000000, 6000, "Earth", "Normal") //test
#calcTemp(6.963*10**8, 1.496*10**11, 6000, "Earth", "Nuclear") //test

#http://www.dangermouse.net/gurps/science/temps.html
#above is link to where the math comes from
# in the formula, alpha stands for aldebo
# in the formula, beta stands for reflectivity



#THE REST IS SAMPLE RUN TEST: This produces 250 K Earth temperature
#sun radius in meters
#Rs = 6.963 * (10 ** 8)
#Earth avg dist in meters
#dis = 1.496 * (10 ** 11)
#Sun surface temp in Kelvin
#TSun = 6000
#Earth's albedo
#a = 0.31
#Earth's atm absorption
#absorb = 0.26

#inner = math.pow((1 - a - (absorb/2)), 0.5) / (2 * dis)
#root = math.pow(Rs * inner, 0.5)
#T = TSun * root

#print(T)