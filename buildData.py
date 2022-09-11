import base64
import json


def main():
    with open("data.json", "r") as f:
        data = json.load(f)

    data_new = {}

    for key in data:
      data_new[key] = []
      for index, item in enumerate(data[key]):
        data_new[key].append(item)

        with open(item["image"], "rb") as f:
          if item["image"].endswith(".png"):
              data_new[key][index]["image"] = "data:image/png;base64," + base64.b64encode(f.read()).decode("utf-8")
          elif item["image"].endswith(".jpg") or item["image"].endswith(".jpeg"):
              data_new[key][index]["image"] = "data:image/jpeg;base64," + base64.b64encode(f.read()).decode("utf-8")

    with open("beverageData.json", "w") as f:
        json.dump(data_new, f, ensure_ascii=False)

if __name__ == '__main__':
  main()
