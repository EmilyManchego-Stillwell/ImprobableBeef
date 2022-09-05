// // This caputures the json data and prints it to the console
// d3.json("data/samples.json").then(function(data){
//     console.log(data);
// });

// // Extracting one item from the metadata key in the samples.json file
// d3.json("data/samples.json").then(function(data) {
//     wfreq = data.metadata.map(person => person.wfreq).sort((a,b) => b - a);
//     filteredWfreq = wfreq.filter(element => element != null);
//     console.log(filteredWfreq);
// });

// Skill Drill 12.3.2 print all the metadata of the first person in the samples.json() dataset(ID940)
d3.json("data/samples.json").then(function(data){
    firstMetadataEntry = data.metadata[0];
    Object.entries(firstMetadataEntry).forEach(([first,second])=> console.log(`${first}:${second}`));
});