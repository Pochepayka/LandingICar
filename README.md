<h1>LandingICar</h1>

This graphical interface allows you to use a complex linguistic analysis software module as a universal tool. Provides access to 5 types of text analysis from any browser.

The developed website works using API modules included in the [SemanticProgramModule](https://github.com/Pochepayka/SemanticProgramModule).

The development of a graphical interface (GUI) is becoming a key element for the implementation of the semantic analysis software module in practical activities. 
Its significance is determined by the multilevel nature of the analysis, which covers stages:
<ul>
<li>graphematic; </li>
<li>morphological;</li> 
<li>syntactic;</li>
<li>semantic.</li>
</ul>  
Presenting the results of such processes as raw text data or console outputs makes it much more difficult to work with complex structures such as syntactic trees or semantic networks. The graphical interface solves this problem by converting information into interactive visual formats that make analysis transparent and interpretable even by untrained users.

<h2>Function</h2>

<h3>Text input and loading</h3>

Support for manual text input via a text field. Uploading files in .txt format. The ability to clear the input field and reset the current analysis. 

<h3>Display of the analysis results</h3> 

<h4>Graphematic level</h4>
A table with tokens and their descriptors (RE, LLE, DC, PUN, etc.). 

<h4>Morphological level</h4>
Details for each word: lemma, part of speech, grammemes (case, number, gender, tense). 

<h4>Syntactic level</h4>
Interactive dependency tree with nodes (verbs, nouns) and connections (subject, complement), school format for visualizing the result of syntactic analysis, output of information about the text. 

<h4>Semantic level</h4>
Visualization of a semantic network in the form of a table of links.

<h3>Exporting the results. </h3>

Saving data in JSON/XML formats for further software processing. CSV is a tabular representation of tokens and descriptors. SVG/PNG reports with visualization of trees. GRAPHML is a graph representation format with information about nodes.

<h2>Launch</h2>
To run the web interface on the local host in development mode, use the command:
 
### `npm start`
After open [http://localhost:3000](http://localhost:3000) to view it in your browser.


<h2>Example</h2>
<h3>Main page</h3>
<img src = https://github.com/Pochepayka/AnalyzeRusText/blob/master/src/media/png/GUI_main_page.png>

<h3>Graphematic result</h3>
<img src = https://github.com/Pochepayka/AnalyzeRusText/blob/master/src/media/png/GUI_graph_analyze.png>


<h3>Morphological result</h3>
<img src = https://github.com/Pochepayka/AnalyzeRusText/blob/master/src/media/png/GUI_morph_analyze.png>

<h3>Sintactic result (school)</h3>
<img src = https://github.com/Pochepayka/AnalyzeRusText/blob/master/src/media/png/GUI_school_sintaxis.png>

<h3>Sintactic result (tree)</h3>
<img src = https://github.com/Pochepayka/AnalyzeRusText/blob/master/src/media/png/GUI_tree_sintaxis.png>

<h3>Semantic result</h3>
<img src = https://github.com/Pochepayka/AnalyzeRusText/blob/master/src/media/png/GUI_sematic_analyze.png>




