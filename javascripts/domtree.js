var array = new Array();
var main_data = new Array('Name','Manager','Tootlip');
var object;
var mystring = "";
var myid = "";
var iframe = document.getElementById("iframe");
var text = document.getElementById("html-sheet");
var doc = iframe.contentWindow.document;
var div = document.getElementById('dommy-tree');
array.push(main_data);


function printNode(node) {
  if (node.tagName) mystring=node.tagName;
  else if (node.nodeType == 3) mystring="Text";
  object = new Array(mystring,node.parentNode.tagName,null);
  array.push(object);
}

function preorder(node) {
  if (node == null) return;
  printNode(node);
  preorder(node.firstChild);
  preorder(node.nextSibling);
}

function domtext() {
  doc.documentElement.innerHTML = text.value;
  preorder(doc.documentElement);
  drawVisualization();
}

function drawVisualization() {
        var data = google.visualization.arrayToDataTable(array);
        var options = {'allowHtml': true, 'nodeClass': 'nodeclass'};
        new google.visualization.OrgChart(document.getElementById('visualization')).
            draw(data, options);
 }