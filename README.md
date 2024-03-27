# belly_button_challenge
The task involves several steps to create a data visualization dashboard using the D3 library. Firstly, the samples.json file is retrieved from a specified URL using D3. Then, a horizontal bar chart is created with a dropdown menu to showcase the top 10 OTUs found in an individual, utilizing sample_values as the bar heights, otu_ids as labels, and otu_labels for hovertext.

![image](https://github.com/kelseajade/belly_button_challenge/assets/152021966/11ddabb2-063a-4b28-a057-5a3d5d08448f)

Following this, a bubble chart is generated to display each sample, where otu_ids determine the x-values, sample_values set the y-values and marker size, otu_ids determine marker colors, and otu_labels are used for text values. The dashboard also includes the display of sample metadata, showcasing an  demographic information by presenting each key-value pair from the metadata JSON object. Plots are updated when a new sample is selected.

![image](https://github.com/kelseajade/belly_button_challenge/assets/152021966/690cad3e-9871-4a44-9d09-d8f21b6663a7)


Lastly, the completed dashboard is deployed to GitHub Pages, with links provided for both deployment and the GitHub repository containing the project files. 
I used the following resrources https://stackoverflow.com/questions/43121679/how-to-append-option-into-select-combo-box-in-d3, https://blog.debugeverything.com/how-to-use-arrow-functions-with-javascript-filter/, https://plotly.com/javascript/bubble-charts/ for code with appending data, using arrow functions, and adding bubble charts. 
