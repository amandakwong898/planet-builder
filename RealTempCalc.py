import math

#atmosphere of Earth or Venus or Mars
#atmospheric absorption 

#...Normal    : Normal atmospheric composition of healthy Earth
#...Pollution : Large amount of CO2 emissions, present day Earth
#...Volcanic  : Conditions after a volcanic eruption, with large dust
#               amounts in the atmosphere
#...Nuclear   : The conditions after a nuclear, where very little
#               radiation reaches the surface due to soot in the air.

# radius of star input by user
Rs = sys.argv[1]
# distance bet planet and star
dis = sys.argv[2]
# star's surface temperature
TSun = sys.argv[3]

atm_absorb = sys.argv[4]

reflect = sys.argv[5]


class atm_abs:
    def normal:
        atm_abs = 0.26
        return atm_abs

    def pollution:
        atm_abs = 0.26
        return atm_abs

    def eruption:
        atm_abs = 0.30
        return atm_abs

    def nuclear:
        atm_abs = 0.75
        return atm_abs

class Reflect:
    def Moon:
        #albedo value aka reflectivity of surface
        a = .12
        return a

    def Mars:
        #albedo value aka reflectivity of surface
        a = .29
        return a

    def Earth:
        #albedo value aka reflectivity of surface
        a = 0.31
        return a

    def Venus:
        #albedo value aka reflectivity of surface
        a = 0.75
        return a

#Arrays for choosing function from classes in 
reflectArray = stdcreate.1Darray("Moon", "Mars", "Earth", "Venus")
atmArray = stdcreate.1Darray("normal", "pollution", "eruption", "nuclear")


#choose one function from each class above to get variables for FORMULA*
for (i in range reflectArray):
    if reflectArray[i] == atm_absorb: # atm_absorb is from user input above
        return 


for (i in range atmArray):
    if atmArray[i] == reflect: # reflect is from user input above
        return 

#FORMULA*
inner = math.pow((1 - a - (absorb/2)), 0.5) / (2 * dis)
root = math.pow(Rs * inner, 0.5)
T = TSun * root

#http://www.dangermouse.net/gurps/science/temps.html
#above is link to where the math comes from
# in the formula, alpha stands for aldebo
# in the formula, beta stands for reflectivity



#SAMPLE RUN TEST: This produces 250 K Earth temperature
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

print(T)