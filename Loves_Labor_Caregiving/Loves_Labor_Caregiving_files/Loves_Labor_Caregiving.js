// Created by iWeb 3.0.4 local-build-20111117

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id3" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="535" height="417" style="height: 401px; left: 82px; position: absolute; top: 175px; width: 535px; z-index: 1; "><param name="src" value="Media/llc%202-Medium_2.m4v" /><param name="controller" value="false" /><param name="autoplay" value="true" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="true" /></object>');}
else if(isiPhone)
{document.write('<object id="id3" type="video/quicktime" width="535" height="417" style="height: 401px; left: 82px; position: absolute; top: 175px; width: 535px; z-index: 1; "><param name="src" value="Loves_Labor_Caregiving_files/llc%202-Medium_2.jpg"/><param name="target" value="myself"/><param name="href" value="../Media/llc%202-Medium_2.m4v"/><param name="controller" value="false"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id3" type="video/quicktime" width="535" height="417" data="Media/llc%202-Medium_2.m4v" style="height: 401px; left: 82px; position: absolute; top: 175px; width: 535px; z-index: 1; "><param name="src" value="Media/llc%202-Medium_2.m4v"/><param name="controller" value="false"/><param name="autoplay" value="true"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="true"/></object>');}}
setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_0:new IWShadow({blurRadius:10,offset:new IWPoint(4.2426,4.2426),color:'#000000',opacity:0.750000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Loves_Labor_Caregiving_files/Loves_Labor_CaregivingMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');fixAllIEPNGs('Media/transparent.gif');applyEffects()}
