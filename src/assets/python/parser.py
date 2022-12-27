import json
import os
from random import choice
from convertation import *
from corrector import *
from tabulate import tabulate



class Parser:

    def __init__(self):
        self.directory = "../jsons"
        self.json_name = "Project"
        self.json_temp = "Temps"
        self.json_keys = "Keys"
        self.json_const = "Constants"
        self.json_complete = "Compete"
        self.json_back_up = "Project-Back-Up"
        self.json_path = f"{self.directory}/{self.json_name}.json"
        self.json_path_temp = f"{self.directory}/{self.json_temp}.json"
        self.json_path_keys = f"{self.directory}/{self.json_keys}.json"
        self.json_path_const = f"{self.directory}/{self.json_const}.json"
        self.json_path_complete = f"{self.directory}/{self.json_complete}.json"
        self.json_path_back_up = f"{self.directory}/{self.json_back_up}.json"
        self.__json_indent = 2
        self.__ID = None
        self.__URLS = None
        self.__datas = None
        self.__atributs = None
        self.__categorys = None
        self.temp_category = None
        self.__keys = None
        self.__const = None
        self.__complete = None
        self.category_types = dict()

    def __searhFreeIds(self, array):
        if array == 0:
            return 0
        elif len(array) == 0:
            return 0
        else:
            temporary_array = set([id for id in range(min(array), max(array) + 1)])
            result = temporary_array.difference(array)
            if len(result) > 0:
                return choice(list(result))
            else:
                return max(array) + 1

    def __searhtValueIndex(self, id, category=None, index=0, ignore=False):
        if category in self.__categorys and ignore is False:
            for item in self.__datas[category]:
                if item.get("id") == id:
                    return index
                else:
                    index += 1

        elif ignore is True:
            for item in category:
                if item == id:
                    return index
                else:
                    index += 1
        else:
            raise KeyError(f"Category Error: Category=[{category}]--JR.getValueIndex--")

    def __standart(self, array, category):
        for atr in array:
            if atr == "id":
                array[atr] = self.__searhFreeIds(self.__getValues(atribut="id", category=category, all=True))
            elif array[atr] is str:
                array[atr] = "NaN"
            elif array[atr] is int or array[atr] is float and atr != "id":
                array[atr] = "NaN"
            elif array[atr] is bool:
                array[atr] = "NaN"
            elif array[atr] is list:
                array[atr] = list()
            elif array[atr] is dict:
                array[atr] = dict()
            # elif array[atr] is list: array[atr] = list()
            # elif array[atr] is dict: array[atr] = dict()
        return array

    def __getCategorys(self):
        return [category for category in self.__datas]

    def __getAtributs(self,category=None):
        arr2 = set()
        if category is None:
            for category in self.__datas:
                if type(self.__datas[category]) is dict:
                    data = self.__datas[category]
                    arr2.update(set([item for item in data.keys()]))
                elif type(self.__datas[category]) is list:
                    data = self.__datas
                    arr2.update(set([item for item in data.keys()]))
            return arr2
        elif category in self.__categorys:
            return [item for item in self.__datas[category][0].keys()]
        else:
            raise f"Fatal Error"

    def __getValues(self, atribut, category=None, all=False):
        arr1 = dict()
        if category is None:
            match all:
                case False:
                    if atribut == "":
                        raise "Fatal Error"
                    elif atribut in self.__atributs:
                        pass
                    else:
                        raise "Fatal Error"
                case _:
                    if atribut == "":
                        raise "Fatal Error"
                    elif atribut in self.__atributs:
                        pass
                    else:
                        raise "Fatal Error"
        elif category in self.__categorys:
            match all:
                case False:
                    if atribut == "":
                        raise "Fatal Error"
                    elif atribut in self.__atributs:
                        pass
                    else:
                        raise "Fatal Error"
                case _:
                    if atribut == "":
                        raise "Fatal Error"
                    elif atribut in self.__atributs:
                        return set(id.get("id") for id in self.__datas[category])
                    else:
                        raise "Fatal Error"
        else:
            raise "Fatal Error"

    def refactor_structure(self,category):
        refCategory = list()
        structure = self.category_types[category]
        for item in self.__datas[category]:
            struct = structure.copy()
            for atr in item:
                struct[atr] = item[atr]
            refCategory.append(struct)
        self.clearCategory(category=category)
        for item in refCategory:
            self.__datas[category].append(item)

    def __tabulate(self, header, body):
        print(tabulate(body, headers=header))

    def checkJson(self, path=None):
        match path:
            case None:
                path = self.json_path
            case _:
                pass
        if os.path.exists(path):
            self.__datas = self.__datasLoader()
            self.__types(self.__datasLoader(path=self.json_path_temp))
            self.__keys = self.__datasLoader(path=self.json_path_keys)
            self.__const = self.__datasLoader(path=self.json_path_const)
            self.__complete = self.__datasLoader(path=self.json_path_complete)
            self.__categorys = self.__getCategorys()
            self.__atributs = self.__getAtributs()
            return True
        else:
            if bool(input("Create Base Json File? [True|False]:")) == True:
                res = self.createJson()
                return res if res is True else False
            else:
                pass

    def __types(self, array):
        for category in array:
            item = dict()
            item[category] = converts_types(array[category])
            self.category_types.update(item)

    def __un_types(self, array):
        for category in array:
            item = dict()
            item[category] = rev_converts_types(array[category])
            self.category_types.update(item)

    def createJson(self, path=None):
        match path:
            case None: path = self.json_path
            case _: pass
        try:
            with open(path, "w") as file:
                project = {
                    "Developers": [
                        {
                            "Developer": "Clyoucker",
                            "Vk": "https://vk.com/clyoucker",
                            "Site": "https://vk.com/litesolidcore",
                            "id": 0
                        }
                    ],
                }
                self.__datasDumper(datas=project, path=path)
                # self.__datas = self.__datasLoader()
                # self.__types(self.__datasLoader(path=self.json_path_temp))
                # self.__atributs = self.__getAtributs()
                # self.__categorys = self.__getCategorys()
                print(f"Json File Was Created! Please Restart..")
                return True
        except:
            FileNotFoundError(f"Path Error:Path=[{path}]--Parser.createJson--")

    def __datasLoader(self, path=None, allert=False):
        match path:
            case None:
                path = self.json_path
                match allert:
                    case True: print(f"Please note Non-standard file path=[{path}] is used!")
                    case False: pass
            case _:
                match allert:
                    case True: print(f"Note The standard path=[{path}] to the file is used!")
                    case False: pass
        try:
            with open(path, "r", ) as file:
                return json.load(file)
        except:
            FileNotFoundError(f"Path Error:Path=[{path}]--Parser.datasLoader--")

    def __datasDumper(self, datas, path=None, allert=False):
        match path:
            case None:
                path = self.json_path
                match allert:
                    case True: print(f"Please note Non-standard file path=[{path}] is used!")
                    case False: pass
            case _:
                match allert:
                    case True: print(f"Note The standard path=[{path}] to the file is used!")
                    case False: pass
        try:
            with open(path, "w", ) as file:
                json.dump(datas, file, indent=self.__json_indent, ensure_ascii=False)
        except:
            FileNotFoundError(f"Path Error:Path=[{path}]--Parser.datasDumper--")

    def backUp(self, path=None):
        match path:
            case None:
                path = self.json_path_back_up
            case _:
                pass

        print("Backup Process...")
        self.__datasDumper(datas=self.__datas, path=self.json_path_back_up)
        print(f"File [{self.json_name}] Successful Backup")

    def shutDown(self):
        self.__datasDumper(datas=self.__datas, path=self.json_path)
        self.__un_types(self.category_types)
        self.__datasDumper(datas=self.__keys, path=self.json_path_keys)
        self.__datasDumper(datas=self.__const, path=self.json_path_const)
        self.__datasDumper(datas=self.__complete, path=self.json_path_complete)
        self.__datasDumper(datas=self.category_types, path=self.json_path_temp)

    def getValue(self, category=None, id=None, obj=True, array=False, only=False):
        arr = dict()
        lst = list()
        if obj is False and array is False:
            raise KeyError(f"Obj | Array Error: Obj=[{obj}]  Array=[{array}]--func getValue--")
        elif obj is True and array is False:
            match category:
                case self.__categorys:
                    match id:
                        case None | -1 | "":
                            raise KeyError(f"Id Error: Id=[{id}]--func getValue--")
                        case _:
                            for item in self.__datas[category]:
                                if item.get("id") == id: return item
                            raise KeyError(f"Id Error: Id=[{id}]--JR.getValue--")
                case _:
                    match id:
                        case None | -1 | "":
                            raise KeyError(f"Id Error: Id=[{id}]--func getValue--")
                        case _:
                            for item in self.__datas["Unknown"]:
                                if item.get("id") == id: return item
                            raise KeyError(f"Id Error: Id=[{id}]--JR.getValue--")
        elif obj is False and array is True:
            match category:
                case False | None | 0 | "":
                    match id:
                        case None | 0 | "":
                            raise KeyError(f"Id Error: Id=[{id}]--func getValue--")
                        case _:
                            for ctg in self.__datas:
                                for item in self.__datas[ctg]:
                                    if item.get("id") == id: arr[ctg] = item
                            return arr
                case _:
                    raise KeyError(f"Category Error: Category=[{category}]--func getValue--")
        elif obj is True and array is True:
            match category:
                case False | None | 0 | "":
                    match id:
                        case None | 0 | "":
                            raise KeyError(f"Id Error: Id=[{id}]--func getValue--")
                        case _:
                            for ctg in self.__datas:
                                for item in self.__datas[ctg]:
                                    if item.get("id") == id: arr[ctg] = item
                            return arr
                case "Games" | "Videos" | "Images" | "Unknown":
                    match id:
                        case None | 0 | "":
                            for item in self.__datas[category]:
                                lst.append(item)
                            return lst
                        case _:
                            for item in self.__datas[category]:
                                if item.get("id") == id: arr[category] = item
                            return arr
                case _:
                    raise KeyError(f"Category Error: Category=[{category}]--func getValue--")
        else:
            raise KeyError(f"Fatal Error: --func getValue--")

    def printData(self, category):
        for item in self.__datas[category]:
            print(item)

    def getData(self,data,path,ctg:dict):
        if len(ctg) > 0:
            if len(path) > 2:
                if type(data[path[0]]) is list:
                    del path[0]
                    print(ctg)
                    ctg.update(path[1])
                    self.getData(ctg,path,ctg)
                elif data[path[0]] is None:
                    print("dgd")
            else:
                if type(data[path[0]]) is list:
                    ctg[path[0]] = path[1]
                    del data[path[0]]
                return 1
        else:
            ctg = dict()
            if len(path) > 2:
                if type(data[path[0]]) is list:
                    del path[0]
                    ctg[path[0]] = path[1]
                    self.getData(ctg,path,ctg)
            else:
                if type(data[path[0]]) is list:
                    ctg[path[0]] = path[1]
                    del data[path[0]]
                return 1

    def createCategory(self, category, attributes):
        attributes = [item.split(":=") for item in attributes.split(" ")]

        pre_keys = list(map(lambda item:[elem.split("@")[1] for elem in item if elem.startswith("@")],attributes))
        pre_complete = list(map(lambda item: [elem.split("!")[1] for elem in item if elem.startswith("!")], attributes))
        pre_const = list(map(lambda item: [elem.split("$")[1] for elem in item if elem.startswith("$")], attributes))
        keys = {category:[elem[0] for elem in pre_keys if len(elem) > 0]}
        complete = {category:[{elem[0].split("[")[0]:elem[0].split("[")[1].split("]")[0]} for elem in pre_complete if len(elem) > 0]}
        const = {category:[elem[0] for elem in pre_const if len(elem) > 0]}

        arr = dict()
        types = dict()
        for item in attributes:
            if "@" in item[0]:
                key = item[0].split("@")[1]
                arr[key] = item[1]
            elif "!" in item[0]:
                key = item[0].split("!")[1].split("[")[0]
                arr[key] = item[1]
            else:
                arr[item[0]] = item[1]
        for key, value in arr.items():
            match value:
                case "list": types[key] = list
                case "dict": types[key] = dict
                case "tuple": types[key] = tuple
                case "int": types[key] = int
                case "float": types[key] = float
                case "str": types[key] = str
                case "bool": types[key] = bool
                case "Date()": types[key] = "Date"
                case "Time()": types[key] = "Time"
                case _: types[key] = "NaN"
        self.category_types.update({category: types})

        match self.__keys:
            case None: self.__keys = keys
            case _: self.__keys.update(keys)

        match self.__complete:
            case None: self.__complete = complete
            case _: self.__complete.update(complete)

        match self.__const:
            case None: self.__const = const
            case _: self.__const.update(const)

        self.__datas[category] = []
        self.__categorys = self.__getCategorys()
        self.temp_category = category
        print(f"Category: [{category}] Successful Created")

    def clearCategory(self, category):
        if self.temp_category is not None and category is None or category == "":
            category = self.temp_category

        if category in self.__categorys:
            self.__datas[category].clear()
            self.temp_category = category
            print(f"Category: [{category}] Successful Clear")

    def delCategory(self,category):
        if category in self.__categorys:
            del self.__datas[category]
            print(f"Category: [{category}] Successful Delited")


    def readObj(self, category, atributs=None):
        if category in self.__categorys:
            body = list()
            header = [head for head in self.category_types[category].keys()]
            if atributs is not None:
                index = 0
                item2 = dict()
                arraySeterOne = set()
                arraySeterTwo = set()
                item = self.__datas[category][index]
                array = convert_atributs(self.category_types[category], atributs)
                array = self.__standart(array=array, category=category)
                for atr in array:
                    if array[atr] != "Zero" or atr != "id":
                        item2[atr] = item[atr]
                    elif type(array[atr]) is list and len(array[atr]) != 0:
                        item2[atr] = item[atr]
                for i in [array[value] for value in array if value != "id" and array[value] != "Zero"]:
                    if type(i) is list and len(i) != 0:
                        for elem in i:
                            arraySeterOne.add(elem)
                    elif type(i) is str or type(i) is int or type(i) is float:
                        arraySeterOne.add(i)
                    else:
                        pass

                while index < len(self.__datas[category]):
                    element = self.__datas[category][index]
                    for i in [element[atr] for atr in element if atr != "id" and atr in item2]:
                        if type(i) is list and len(i) != 0:
                            for elem in i:
                                arraySeterTwo.add(elem)
                        elif type(i) is str or type(i) is int or type(i) is float:
                            arraySeterTwo.add(i)
                        else:
                            pass
                    index += 1
                    if arraySeterOne.issubset(arraySeterTwo):
                        obj = [i for i in element.values()]
                        obj.insert(0, obj.pop(-1))
                        body.append(obj)
                        arraySeterTwo.clear()
                    else:
                        arraySeterTwo.clear()
            else:
                for item in self.__datas[category]:
                    obj = [i for i in item.values()]
                    # obj.insert(0, obj.pop(-1))
                    body.append(obj)
            self.__tabulate(body=body, header=header)
        else:
            raise "Fatal Error"


    def addObj(self, atributs, category=None):
        if self.temp_category is not None and category is None or category == "":
            category = self.temp_category
        if category in self.__categorys:
            array = convert_atributs(self.category_types[category], atributs)
            array = self.__standart(array=array, category=category)
            try:
                keys = self.__keys[category]
                count = 0
                while count != len(keys):
                    for key in keys:
                        primary = set([item[key] for item in self.__datas[category]])
                        if array[key] not in primary or array[key] == "NaN":
                            count += 1
                        else:
                            raise print(f"You Have A Duplicate Key: [{key}]")

                    self.__datas[category].append(array)
                    self.temp_category = category
                    print(f"Obj [id:{array['id']} | title:{array['title']}] Successful Added")

            except KeyError:
                    self.__datas[category].append(array)
                    self.temp_category = category
                    print(f"Obj [id:{array['id']} | title:{array['title']}] Successful Added")
        else:
            raise print(f"Error Category: [{category}]")

    def changeObj(self, id: int, atributs: str, category=None):
        if self.temp_category is not None and category is None or category == "":
            category = self.temp_category
        if category in self.__categorys:
            if type(id) is int:
                array = convert_atributs(self.category_types[category], atributs)
                array = self.__standart(array=array, category=category)
                del array["id"]
                for item in self.__datas[category]:
                    if item.get("id") == id:
                        for atr in array:
                            if array[atr] != "Zero":
                                item[atr] = array[atr]
                self.temp_category = category
            else:
                raise KeyError(f"ID Error: your ID is str")
        else:
            raise KeyError(f"Category Error: !Category=[{category}]")

    def delObj(self, category, id):
        keys = []
        if "," in id:
            ids = [key for key in id.split(",")]
            for id in ids:
                if "-" in id:
                    key = [int(i) for i in id.split("-")]
                    counter = key[1] - key[0] + 1
                    for i in range(counter):
                        keys.append(key[0] + i)
                else:
                    keys.append(int(id))
        elif "-" in id:
            ids = [int(key) for key in id.split("-")]
            counter = ids[1] - ids[0] + 1
            for i in range(counter):
                keys.append(ids[0] + i)
        else:
            keys.append(int(id))

        if self.temp_category is not None and category is None or category == "":
            category = self.temp_category

        if category in self.__categorys:
            for key in keys:
                for item in self.__datas[category]:
                    if item["id"] == key:
                        index = self.__searhtValueIndex(id=key, category=category)
                        del self.__datas[category][index]
                        self.temp_category = category
                        print(f"Obj: [{category}/{index}] Successful Delit")


    def addAtribut(self, category, atribut):
        index = 0
        if category in self.__categorys:
            arr = dict()
            arr2 = dict()
            atribut = [item.split(":=") for item in atribut.split(" ")]

            for item in atribut:
                if "@" in item[0]:
                    arr[item[0][1:]] = item[1]
                elif "!" in item[0]:
                    arr[item[0][1:]] = item[1]
                else:
                    arr[item[0]] = item[1]

            for key, value in arr.items():
                match value:
                    case "list":
                        arr2[key] = list
                    case "dict":
                        arr2[key] = dict
                    case "tuple":
                        arr2[key] = tuple
                    case "int":
                        arr2[key] = int
                    case "float":
                        arr2[key] = float
                    case "str":
                        arr2[key] = str
                    case "bool":
                        arr2[key] = bool
                    case "date":
                        arr2[key] = "date"
                    case _:
                        arr2[key] = "Zero"

            item = {category: arr2}
            types = set(atr for atr in self.category_types[category].keys())
            for atr in item[category]:
                if atr not in types:
                    self.category_types[category][atr] = item[category][atr]

            if len(self.__datas[category]) != 0:
                item = set(atr for atr in self.__datas[category][index].keys())

            types = set(atr for atr in self.category_types[category].keys())

            while index < len(self.__datas[category]):
                for type in types:
                    if type not in self.__datas[category][index]:
                        self.__datas[category][index][type] = "Zero"
                index += 1

    def delAtribut(self, category, atribut):
        pass


    def shiftObj(self, id, olfCategory, newCategory): pass

    def create_key(self,key,category):
        if category in self.__categorys:
            if category not in self.__keys:
                self.__keys[category] = [key]
            else:
                if key not in self.__keys[category]:
                    self.__keys[category].append(key)
                else:
                    raise "Error!"
        else:
            raise "Error!"

    def auto_complite(self,values,category):
        auto = {category:dict([value.split(":=") for value in values.split(" ")])}
        for key in auto[category]:
            format(auto[category][key])

    def load_back_up(self):
        datas = self.__datasLoader(path=self.json_path_back_up)
        self.__datasDumper(datas=datas, path=self.json_path)

    def normolazi(self,values,category):
        values = ([value for value in values.split(" ")])
        if category in self.__categorys:
            for item in self.__datas[category]:
                for value in values:
                    for atr in item:
                        if atr == value:
                            if type(item[atr]) is not self.category_types[category][atr]:
                                if item[atr] == "Zero":
                                    item[atr] = list()
                                else:
                                    if "|" in item[atr]:
                                        item[atr] = [atr for atr in item[atr].split("|")]
                                    elif len(item[atr]) > 0:
                                        item[atr] = [item[atr]]
                                    else:
                                        item[atr] = item[atr]




parser = Parser()
#parser.load_back_up()
parser.checkJson()
#parser.backUp()

parser.createCategory(category="Discounts",attributes="!poster[Error]:=str change:=Date() $upload[Date()]:=Date() watch:=Time()")
# parser.shutDown()
#parser.createCategory(category="Images",atributs="id:=int @poster:=str !upload:=Date() change:=Date()")
# parser.addAtribut(atribut="!upload:=Date()",category="Images")
# parser.addAtribut(atribut="change:=Date()",category="Images")
#parser.addObj(atributs="upload:=2023-12-06 poster:=https://external-preview.redd.it/dqyMP5N_wH7ud6I-J6PJra4Px-YnumJRhQ5P4Lh36A0.jpg?width=640&crop=smart&auto=webp&s=9d52648c1c6f1d7eec579fd23d1bfd22281d3717",category="Images")


#parser.auto_complite(values="upload:=Date() change:=this.Date()",category="Images")


# parser.createCategory(category="Catalog",atributs="@poster:=str @href:=str @title:=str info:=dict price:=dict star:=int id:=int")
# parser.addObj(atributs="poster:=# href:=# title:=Lenovo-2022-Pro info:=Ssd=>HD-Flls-Cube,Processor=>Inrel-5 price:=Dollar=>64,Rub=>6205,Evro=>54",category="Catalog")
# parser.addObj(atributs="poster:=4 href:=2 title:=Lenovo-2022-Pr info:=Ssd=>HD-Flls-Cube,Processor=>Inrel-5 price:=Dollar=>64,Rub=>6205,Evro=>54")

#parser.addObj(atributs="products:=title=>PC/Accessories,type=>Computers,poster=>https://sun9-66.userapi.com/impg/PnUOmWAxVAz1TuXVW_5cVCVnEt_MHTvi-QrqGQ/qjb03JZ-p2E.jpg?size=820x509&quality=95&sign=07b45f01d7ba03f788f728a23e67c6fe&type=album",category="Home")

# parser.createCategory(category="Home=>Products",attributes="@title:=str !type:=str @poster:=str")




# def start():
#     parser.checkJson()
#     while True:
#         try:
#             cmd = command(input("command: "))
#             match cmd:
#                 case "create.category":
#                     print(f"Active Category: [{parser.temp_category}]")
#                     parser.createCategory(category=input("Category: "),attributes=input("Attributes: "))
#                 case "clear.category":
#                     print(f"Active Category: [{parser.temp_category}]")
#                     parser.clearCategory(category=input("Category: "))
#                 case "del.category":
#                     parser.delCategory(category=input("Category: "))
#                 case "create.obj":
#                     print(f"Active Category: [{parser.temp_category}]")
#                     parser.addObj(atributs=input("Attributes: "),category=input("Category: "))
#                 case "del.obj":
#                     print(f"Active Category: [{parser.temp_category}]")
#                     parser.delObj(category=input("Category: "),id=input("Object ID: "))
#                 case "datas":
#                     parser.readObj(category=input("Category: "))
#                 case "backup":
#                     parser.backUp()
#                 case "stop" | "exit" | "esc":
#                     break
#                 case _: pass
#         except KeyboardInterrupt:
#             print("Принудительное закрытие!")
#             parser.shutDown()
#             break
#
# if __name__ == "__main__":
#     start()
#     print("Saving Datas...")
#     parser.shutDown()
#     print("Datas Successful Saved")
#
