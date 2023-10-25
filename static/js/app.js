// url for the data
const data_url = 'https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json';

// global variable for retrieved data
var retrievedData;

// retrieve json data from url 
d3.json(data_url).then(function(data) {
    loadTestSubjects(data.names);
    retrievedData = data;
});

// populate the combobox with the list of subjects
function loadTestSubjects(userList) {
    let dropDownMenu = d3.select('#selDataset')
    
    userList.forEach(name => {
        dropDownMenu.append('option').text(name).property('value', name);
    });

    dropDownMenu.property('selectedIndex', -1);
}
