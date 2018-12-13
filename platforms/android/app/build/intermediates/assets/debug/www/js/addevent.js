function gatherData() {
  var event = {
    event_name: "Knitting",
    date: "12/25/1998",
    address: ,
    interests:
  };
  document.getElementById("event_name").innerHTML = event.event_name + " on this date: " + event.date;
}
/* function GatherEventInfo() {
  var event_name;
  var date;
  var address;
  var interests;

  function GatherEventInfo(){}

  function GatherEventInfo(var event_name, var date, var address, var interests) {
    this.event_name = event_name;
    this.date = date;
    this.address = address;
    this.interests = interests;
  }

  function Dictionary<string, Object> ToDictonary() {
    Dictionary<string, Object> result = new Dictionary<string, Object>();
    result["event_name"] = event_name;
    result["date"] = date;
    result["address"] = address;
    result["interests"] = interests;

    return result;
  }
}

function addEvent(var event_name, var date, var address, var interests) {
  var key = mDatabase.Child("event_name").Push().Key;
  GatherEventInfo entry = new GatherEventInfo(event_name, date, address, interests);
  Dictionary<string, Object> entryValues = entry.ToDictionary();

  Dictionary<string, Object> childUpdates = new Dictionary<string, Object>();
  childUpdates["/scores/" + key] = entryValues;
  childUpdates["/user-scores/" + userId + "/" + key] = entryValues;

  mDatabase.UpdateChildrenAsync(childUpdates);
} */
