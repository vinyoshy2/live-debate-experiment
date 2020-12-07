import json

data = {}
with open("comments.json", "r") as f:
    data = json.load(f)
for entry in data["entries"]:
    entry["activation_time"] = entry["activation_time"] - 10000
with open("comments_adjusted.json", "w+") as f2:
    f2.write(json.dumps(data, indent=4))
