let title = "Horizontal Bar Chart with Plotly"



let url = ('https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json');
function dropdownMenu(){
    d3.json(url).then((data) => {

let names = data.names
console.log(names)
let selector = d3.select("#selDataset");
    
            
    names.forEach((sample) => {
        selector
            .append("option")
            .text(sample)
            .property("value", sample);
    });
    barchart(names[0])
    bubblechart(names[0])
    metatable(names[0])
    })

} 
dropdownMenu()
function optionChanged(x){
    barchart(x)
    bubblechart(x)
    metatable(x)
}
function barchart(x){
    d3.json(url).then((data) => {

        let samples = data.samples
        let filtersample = samples.filter(number => number.id ==x)[0];
        const sampleValues = filtersample.sample_values.slice(0, 10).reverse();
              const otuIds = filtersample.otu_ids.slice(0, 10).map(id => `OTU ${id}`).reverse();
              const otuLabels = filtersample.otu_labels.slice(0, 10).reverse();
        
              const trace = {
                x: sampleValues,
                y: otuIds,
                text: otuLabels,
                type: 'bar',
                orientation: 'h'
              };
        
              const bardata = [trace];
        
              const layout = {
                title: 'Top 10 OTUs',
                xaxis: { title: 'Sample Values' },
                yaxis: { title: 'OTU IDs' }
              };
        
              // Plot the chart
              Plotly.newPlot('bar', bardata, layout);         
            
        
            })

}
function bubblechart(x){
    d3.json(url).then((data) => {

        let samples = data.samples
        let filtersample = samples.filter(number => number.id ==x)[0];
        const sampleValues = filtersample.sample_values;
              const otuIds = filtersample.otu_ids;
              const otuLabels = filtersample.otu_labels;
            //   Use otu_ids for the x values.

            //   Use sample_values for the y values.
              
            //   Use sample_values for the marker size.
              
            //   Use otu_ids for the marker colors.
              
            //   Use otu_labels for the text values.
              var trace1 = {
                x: otuIds,
                y: sampleValues,
                text:otuLabels,
                mode: 'markers',
                marker: {
                  color: otuIds,
                  size: sampleValues
                }
              };
              
              var bubbledata = [trace1];
              
              var layout = {
                title: 'Bubble Chart',
                showlegend: false,
                
              };
              
              Plotly.newPlot('bubble', bubbledata, layout);   
            
        
            })

        }
function metatable(x){
            d3.json(url).then((data) => {
        
        let metadata = data.metadata
        let selector = d3.select("#sample-metadata");
        let filtermetadata = metadata.filter(number => number.id ==x)[0];
        selector.html("")
        Object.entries(filtermetadata).forEach(entry => {
            const [key, value] = entry;
            console.log(key, value);
            selector
                    .append("h6")
                    .text(`${key}: ${value}`)
          });           
            
            })
        
        }   
