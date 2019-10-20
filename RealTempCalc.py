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
Rs = sys.argv[1] #TEST VALUE: 6.963 * (10 ** 8)
# distance bet planet and star
dis = sys.argv[2] #TEST VALUE: 1.496 * (10 ** 11)
# star's surface temperature
TSun = sys.argv[3] #TEST VALUE: 6000
#choose from Earth, Venus, Mars, Moon
reflect = sys.argv[4] #TEST VALUE: 0.31
#choose from Normal, Pollution, Volcanic, or Nuclear
atm_absorb = sys.argv[5] #TEST VALUE: 0.26

#inserting test values should produce an answer approximately 250.





#provides appropriate albedo value for formula, based on user choice
def a():
    #Dictionary for albedo value aka reflectivity of surface
    reflectDict = {"Moon": 0.12, "Mars": 0.29, "Earth": 0.31, "Venus": 0.75}
    for key in reflectDict:
        if reflectDict[key] == atm_absorb: # atm_absorb is from user input above
            print(reflectDict[value])
            return reflectDict[value] # TRYING TO RETURN VAL OF KEY NOT WORK

#provides appropriate beta value for formula based on user choice
def b():
    #Dictionary for beta aka atmosphere absorption
    atmDict = {"normal": 0.26, "pollution": 0.26, "eruption": 0.30, "nuclear": 0.75}
    for key in atmDict:
        if atmDict[key] == reflect: # reflect is from user input above
            print(atmDict[value])
            return atmDict[atmDict[key]] # TRYING TO RETURN VAL OF KEY NOT WORK

print(a()) #for debugging: looking at what value or type it is
print(b()) #for deugging: looking at what value or type it is

#FORMULA*
inner = math.pow((1 - a() - (b()/2)), 0.5) / (2 * dis) 
#PROBLEM ABOVE^: values, or data types, of a() and b() are "None"
root = math.pow(Rs * inner, 0.5)
T = TSun * root

print(T)

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