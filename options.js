var DEFAULT_DOCS = "odt,doc,docx,pdf,pps,ppt,tif,tiff,xls,xlsx,pptx,pages,ai,psd,dxf,svg,eps,ps,xps";
var SEPARATOR = ",";//"|";
function isFirstRun() {
  return localStorage["docext"] == undefined;
}
function setDefaultOptions() {
  localStorage["docext"] = DEFAULT_DOCS;
}
function getTypes() {
  if (isFirstRun()) {
    setDefaultOptions();
  }
  return localStorage["docext"];
}
function getTypesList() {
  return getTypes().split(SEPARATOR);
}
// handle mistyping and store the options
function setTypes(types) {
  var tmp = types.toLowerCase().trim().replace(/ /g,SEPARATOR).replace(/;/g,SEPARATOR);
  while (tmp.indexOf(",,")!=-1) {
    tmp = tmp.replace(/,,/g,SEPARATOR);
  }
  // test if we begin or end with ','
  if (tmp.indexOf(SEPARATOR) == 0) {
    tmp = tmp.substr(1);
  }
  if (tmp.lastIndexOf(SEPARATOR) == tmp.length-1) {
    tmp = tmp.substr(0,tmp.length-1);
  }
  localStorage["docext"] = tmp;
  return tmp;
}
