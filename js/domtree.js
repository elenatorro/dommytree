var array = new Array();
var main_data = new Array('Name','Manager','Tooltip');
var object;
var mystring = "";
var myid = "";
var iframe = document.getElementById("iframe");
var text = document.getElementById("html-sheet");
var doc = iframe.contentWindow.document;
var div = document.getElementById('dommy-tree');
array.push(main_data);
i = 0;

function addID() {
  i++;
  return "-aux="+i;
}

function printNode(node) {
    if (!node.hasAttribute("id")) node.setAttribute('id',addID());
    mystring=node.tagName+"-id-"+node.id;
    object = new Array(mystring,node.parentNode.tagName+"-id-"+node.parentNode.id,null);
    array.push(object);
}

function preorder(node) {
  if (node == null) return;
  printNode(node);
  preorder(node.firstElementChild);
  preorder(node.nextElementSibling);
}

function domtext() {
  doc.documentElement.innerHTML = text.value;
  preorder(doc.documentElement.firstElementChild);
  drawVisualization();
  cleanTree();
}

function drawVisualization() {
        var data = google.visualization.arrayToDataTable(array);
        var options = {'allowHtml': true, 'nodeClass': 'nodeclass'};
        new google.visualization.OrgChart(document.getElementById('visualization')).
            draw(data, options);
 }

function cleanTree() {
var mynodes = document.getElementsByClassName('nodeclass');
for (var i = 0; i < mynodes.length; i++) {
    mynodes[i].innerHTML = mynodes[i].innerHTML.split('-')[0];
  }
}
