(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['barberPost'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"post-list\">\n    <div class= \"content\">\n        <div class=\"post-info\">\n            <button class= \"cancel\" type=\"cancel\">Cancel</button>\n            <div class=\"info-name\">\n                <p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":6,"column":19},"end":{"line":6,"column":27}}}) : helper)))
    + "</p>\n            </div>\n            <div class=\"info-date\">\n                <p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"date") || (depth0 != null ? lookupProperty(depth0,"date") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data,"loc":{"start":{"line":9,"column":19},"end":{"line":9,"column":27}}}) : helper)))
    + "</p>\n            </div>\n            <div class=\"info-time\">\n                <p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"time") || (depth0 != null ? lookupProperty(depth0,"time") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"time","hash":{},"data":data,"loc":{"start":{"line":12,"column":19},"end":{"line":12,"column":27}}}) : helper)))
    + "</p>\n            </div>\n            <div class=\"info-email\">\n                <p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"email") || (depth0 != null ? lookupProperty(depth0,"email") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"email","hash":{},"data":data,"loc":{"start":{"line":15,"column":19},"end":{"line":15,"column":28}}}) : helper)))
    + "</p>\n            </div>\n            <div class=\"info-type\">\n                <p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"type") || (depth0 != null ? lookupProperty(depth0,"type") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data,"loc":{"start":{"line":18,"column":19},"end":{"line":18,"column":27}}}) : helper)))
    + "</p>\n            </div>\n            \n        </div>\n    </div>      \n\n</div>";
},"useData":true});
})();