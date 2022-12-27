import datetime

def calc_size(size=0):
    if 0 <= size <= 1023:
        size = f"{size} Mb"
    else:
        size = f"{round(size / 1024, 1)} Gb"
    return size

def calc_time(time=0):
    if 0.0 <= time <= 0.5:
        size = f"{time} Mn"
    elif time == 0.6:
        size = f"{1} Mn"
    elif 0 <= time <= 59:
        size = f"{time} Mn"
    else:
        size = f"{round(time / 60, 1)} Hr"
    return size

def convert_size(size=0):
    match size:
        case "0 Mb" | None: return 0
        case _:
            size = size.split(" ")
            if size[1] == "Mb":
                return int(size[0])
            else:
                if "." in size[0]:
                    size[0] = size[0].replace(".","")
                    return int(size[0])*100

def convert_time(time=0):
    match time:
        case "0 Mn": return 0
        case _:
            time = time.split("-")
            if time[1] == "Mn":
                return int(time[0])
            else:
                if "." in time[0]:
                    time[0] = time[0].replace(".","")
                    return int(time[0]) * 100
                else:
                    return int(time[0]) * 100

def convert_money(type,money):
    match type:
        case "Dollar": return money*86
        case "Rub": return money
        case "Evro": return money*96
        case _: return 0


def convert_atributs(secret,atributs):
    atributs = [arg.split(":=") for arg in atributs.split(" ")]
    array = secret.copy()
    for atr in atributs:
        if secret.get(atr[0]):
            if secret.get(atr[0]) is list:
                if "," in atr[1]:
                    array[atr[0]] = [i for i in atr[1].split(",")]
                else:
                    array[atr[0]] = [atr[1]]
            elif secret.get(atr[0]) is int and atr[0] == "size":
                array[atr[0]] = calc_size(int(atr[1]))
            elif secret.get(atr[0]) is int or secret.get(atr[0]) is float and atr[0] == "time":
                if "." in atr[1]:
                    array[atr[0]] = calc_time(float(atr[1]))
                else:
                    array[atr[0]] = calc_time(int(atr[1]))
            elif secret.get(atr[0]) is dict:
                if "=>" in atr[1]:
                    comp_dict = {}
                    pre_dict = [key.split("=>") for key in atr[1].split(",")]
                    for key in pre_dict:
                        if atr[0] == "price":
                            comp_dict[key[0]] = convert_money(key[0],int(key[1]))
                        else:
                            comp_dict[key[0]] = key[1]
                    array[atr[0]] = comp_dict
            else:
                if len(atr[1]) == 0:
                    array[atr[0]] == "Zero"
                else:
                    array[atr[0]] = atr[1]
    return array

def converts_types(array):
    arr = dict()
    for atr in array:
        if array[atr] == "str":
            arr[atr] = str
        elif array[atr] == "int":
            arr[atr] = int
        elif array[atr] == "float":
            arr[atr] = float
        elif array[atr] == "bool":
            arr[atr] = bool
        elif array[atr] == "dict":
            arr[atr] = dict
        elif array[atr] == "list":
            arr[atr] = list
    return arr

def rev_converts_types(array):
    arr = dict()
    for atr in array:
        if array[atr] is str:
            arr[atr] = "str"
        elif array[atr] is int:
            arr[atr] = "int"
        elif array[atr] is float:
            arr[atr] = "float"
        elif array[atr] is bool:
            arr[atr] = "bool"
        elif array[atr] is dict:
            arr[atr] = "dict"
        elif array[atr] is list:
            arr[atr] = "list"
        else:
            arr[atr] = "None"
    return arr



def format(format):

    match format:
        case "Date()":
            return datetime.date.today()

        case "this.Date()": pass

        case "Time()": pass

        case "Money()": pass

        case _: raise KeyError("Format Error!")
