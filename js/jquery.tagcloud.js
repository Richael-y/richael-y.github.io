!function(t){function e(t){return 4==t.length&&(t=jQuery.map(/\w+/.exec(t),(function(t){return t+t})).join("")),hex=/(\w{2})(\w{2})(\w{2})/.exec(t),[parseInt(hex[1],16),parseInt(hex[2],16),parseInt(hex[3],16)]}function r(t,r,n){return rgb=jQuery.map(e(t.start),(function(t,e){return ref=Math.round(t+r[e]*n),ref>255?ref=255:ref<0&&(ref=0),ref})),i=rgb,"#"+jQuery.map(i,(function(t){return hex=t.toString(16),hex=1==hex.length?"0"+hex:hex,hex})).join("");var i}function n(t,e){return t-e}t.fn.tagcloud=function(i){var o=t.extend({},t.fn.tagcloud.defaults,i);return tagWeights=this.map((function(){return t(this).attr("rel")})),tagWeights=jQuery.makeArray(tagWeights).sort(n),lowest=tagWeights[0],highest=tagWeights.pop(),range=highest-lowest,0===range&&(range=1),o.size&&(fontIncr=(o.size.end-o.size.start)/range),o.color&&(colorIncr=function(t,r){return jQuery.map(e(t.end),(function(n,i){return(n-e(t.start)[i])/r}))}(o.color,range)),this.each((function(){weighting=t(this).attr("rel")-lowest,o.size&&t(this).css({"font-size":o.size.start+weighting*fontIncr+o.size.unit}),o.color&&t(this).css({backgroundColor:r(o.color,colorIncr,weighting)})}))},t.fn.tagcloud.defaults={size:{start:14,end:18,unit:"pt"}}}(jQuery);