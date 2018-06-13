Search.setIndex({docnames:["api/correctors","api/index","api/lightcurve","api/lightcurvefile","api/prf","api/targetpixelfile","api/utils","citing","contributing","index","install","other_software","tutorials/1.02-target-pixel-files","tutorials/1.03-what-are-lightcurves","tutorials/1.04-lightcurve-files","tutorials/1.05-interact-with-lightcurves-and-tpf","tutorials/2.01-how-to-detrend","tutorials/2.02-recover-a-planet","tutorials/2.03-appending-lightcurves","tutorials/2.04-removing-cbvs","tutorials/2.05-making-custom-apertures","tutorials/2.06-identify-rolling-band","tutorials/2.07-masking-data","tutorials/2.08-making-fits-files","tutorials/cutting-out-tpfs-from-tess-ffis","tutorials/motion-correction/replicate-vanderburg-2014-k2sff","tutorials/motion-correction/replicate-vanderburg-2014-lightkurve","tutorials/quickstart","tutorials/section1","tutorials/section2","tutorials/section3"],envversion:53,filenames:["api/correctors.rst","api/index.rst","api/lightcurve.rst","api/lightcurvefile.rst","api/prf.rst","api/targetpixelfile.rst","api/utils.rst","citing.rst","contributing.rst","index.rst","install.rst","other_software.rst","tutorials/1.02-target-pixel-files.ipynb","tutorials/1.03-what-are-lightcurves.ipynb","tutorials/1.04-lightcurve-files.ipynb","tutorials/1.05-interact-with-lightcurves-and-tpf.ipynb","tutorials/2.01-how-to-detrend.ipynb","tutorials/2.02-recover-a-planet.ipynb","tutorials/2.03-appending-lightcurves.ipynb","tutorials/2.04-removing-cbvs.ipynb","tutorials/2.05-making-custom-apertures.ipynb","tutorials/2.06-identify-rolling-band.ipynb","tutorials/2.07-masking-data.ipynb","tutorials/2.08-making-fits-files.ipynb","tutorials/cutting-out-tpfs-from-tess-ffis.ipynb","tutorials/motion-correction/replicate-vanderburg-2014-k2sff.ipynb","tutorials/motion-correction/replicate-vanderburg-2014-lightkurve.ipynb","tutorials/quickstart.ipynb","tutorials/section1.rst","tutorials/section2.rst","tutorials/section3.rst"],objects:{"lightkurve.correctors":{KeplerCBVCorrector:[0,1,1,""],SFFCorrector:[0,1,1,""]},"lightkurve.correctors.KeplerCBVCorrector":{coeffs:[0,2,1,""],correct:[0,3,1,""],get_cbv_url:[0,3,1,""],get_cbvs_list:[0,3,1,""],lc_file:[0,2,1,""],opt_result:[0,2,1,""],plot_cbvs:[0,3,1,""]},"lightkurve.correctors.SFFCorrector":{arclength:[0,3,1,""],bin_and_interpolate:[0,3,1,""],breakpoints:[0,3,1,""],correct:[0,3,1,""],fit_bspline:[0,3,1,""],rotate_centroids:[0,3,1,""]},"lightkurve.lightcurve":{KeplerLightCurve:[2,1,1,""],LightCurve:[2,1,1,""],TessLightCurve:[2,1,1,""],iterative_box_period_search:[2,4,1,""]},"lightkurve.lightcurve.KeplerLightCurve":{correct:[2,3,1,""],to_fits:[2,3,1,""],to_pandas:[2,3,1,""]},"lightkurve.lightcurve.LightCurve":{append:[2,3,1,""],astropy_time:[2,2,1,""],bin:[2,3,1,""],cdpp:[2,3,1,""],flatten:[2,3,1,""],fold:[2,3,1,""],normalize:[2,3,1,""],plot:[2,3,1,""],properties:[2,3,1,""],remove_nans:[2,3,1,""],remove_outliers:[2,3,1,""],to_csv:[2,3,1,""],to_fits:[2,3,1,""],to_pandas:[2,3,1,""],to_table:[2,3,1,""]},"lightkurve.lightcurvefile":{KeplerLightCurveFile:[3,1,1,""],TessLightCurveFile:[3,1,1,""]},"lightkurve.lightcurvefile.KeplerLightCurveFile":{astropy_time:[3,2,1,""],campaign:[3,2,1,""],channel:[3,2,1,""],compute_cotrended_lightcurve:[3,3,1,""],from_archive:[3,5,1,""],get_lightcurve:[3,3,1,""],keplerid:[3,2,1,""],mission:[3,2,1,""],obsmode:[3,2,1,""],plot:[3,3,1,""],pos_corr1:[3,2,1,""],poss_corr2:[3,2,1,""],quarter:[3,2,1,""]},"lightkurve.lightcurvefile.TessLightCurveFile":{get_lightcurve:[3,3,1,""],ticid:[3,2,1,""]},"lightkurve.prf":{KeplerPRF:[4,1,1,""],PRFPhotometry:[4,1,1,""],SceneModel:[4,1,1,""],SimpleKeplerPRF:[4,1,1,""],get_initial_guesses:[4,4,1,""]},"lightkurve.prf.KeplerPRF":{evaluate:[4,3,1,""],plot:[4,3,1,""]},"lightkurve.prf.PRFPhotometry":{fit:[4,3,1,""],get_residuals:[4,3,1,""]},"lightkurve.prf.SceneModel":{evaluate:[4,3,1,""],gradient:[4,3,1,""],plot:[4,3,1,""]},"lightkurve.prf.SimpleKeplerPRF":{evaluate:[4,3,1,""],gradient:[4,3,1,""]},"lightkurve.targetpixelfile":{KeplerTargetPixelFile:[5,1,1,""]},"lightkurve.targetpixelfile.KeplerTargetPixelFile":{astropy_time:[5,2,1,""],cadenceno:[5,2,1,""],campaign:[5,2,1,""],centroids:[5,3,1,""],channel:[5,2,1,""],column:[5,2,1,""],dec:[5,2,1,""],flux:[5,2,1,""],flux_bkg:[5,2,1,""],flux_bkg_err:[5,2,1,""],flux_err:[5,2,1,""],from_archive:[5,5,1,""],from_fits_images:[5,5,1,""],get_bkg_lightcurve:[5,3,1,""],get_coordinates:[5,3,1,""],get_prf_model:[5,3,1,""],hdu:[5,2,1,""],header:[5,3,1,""],interact:[5,3,1,""],keplerid:[5,2,1,""],mission:[5,2,1,""],module:[5,2,1,""],nan_time_mask:[5,2,1,""],obsmode:[5,2,1,""],output:[5,2,1,""],pipeline_mask:[5,2,1,""],plot:[5,3,1,""],pos_corr1:[5,2,1,""],pos_corr2:[5,2,1,""],quality:[5,2,1,""],quarter:[5,2,1,""],ra:[5,2,1,""],row:[5,2,1,""],shape:[5,2,1,""],time:[5,2,1,""],to_fits:[5,3,1,""],to_lightcurve:[5,3,1,""],wcs:[5,2,1,""]},"lightkurve.utils":{KeplerQualityFlags:[6,1,1,""],TessQualityFlags:[6,1,1,""],bkjd_to_astropy_time:[6,4,1,""],channel_to_module_output:[6,4,1,""],module_output_to_channel:[6,4,1,""],running_mean:[6,4,1,""]},"lightkurve.utils.KeplerQualityFlags":{ApertureCosmic:[6,2,1,""],Argabrightening:[6,2,1,""],ArgabrighteningOnCCD:[6,2,1,""],AttitudeTweak:[6,2,1,""],CoarsePoint:[6,2,1,""],CollateralCosmic:[6,2,1,""],DEFAULT_BITMASK:[6,2,1,""],Desat:[6,2,1,""],DetectorAnomaly:[6,2,1,""],EarthPoint:[6,2,1,""],HARDEST_BITMASK:[6,2,1,""],HARD_BITMASK:[6,2,1,""],ImpulsiveOutlier:[6,2,1,""],ManualExclude:[6,2,1,""],NoData:[6,2,1,""],NoFinePoint:[6,2,1,""],OPTIONS:[6,2,1,""],PossibleThrusterFiring:[6,2,1,""],RollingBandInAperture:[6,2,1,""],RollingBandInMask:[6,2,1,""],STRINGS:[6,2,1,""],SafeMode:[6,2,1,""],SensitivityDropout:[6,2,1,""],ThrusterFiring:[6,2,1,""],ZeroCrossing:[6,2,1,""],decode:[6,6,1,""]},lightkurve:{correctors:[0,0,0,"-"],lightcurve:[2,0,0,"-"],lightcurvefile:[3,0,0,"-"],prf:[4,0,0,"-"],targetpixelfile:[5,0,0,"-"],utils:[6,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","method","Python method"],"4":["py","function","Python function"],"5":["py","staticmethod","Python static method"],"6":["py","classmethod","Python class method"]},objtypes:{"0":"py:module","1":"py:class","2":"py:attribute","3":"py:method","4":"py:function","5":"py:staticmethod","6":"py:classmethod"},terms:{"01008301e":12,"02213345e":12,"07966064e":12,"0x1c17d4dac8":24,"0x1c1898d2b0":23,"0x1c19156a90":20,"0x1c1931f898":20,"0x1c19b4b9e8":23,"0x1c19b58c88":23,"0x1c1b9f2d68":24,"0x7f59f8f17d30":12,"0x7fb83035ce80":21,"0x7fb8321fb6a0":21,"0x7fb83237f5c0":21,"0xa24f479e8":26,"10215393e":12,"10b":17,"12277588e":12,"128g5002v":2,"12t11":23,"133b":16,"14911423e":12,"15010413e":12,"153kb":25,"18t17":23,"1e2":4,"1e3":4,"2002a":17,"2009350155506_lpd":17,"2010078095331_llc":14,"2010078095331_lpd":13,"2011073133259_llc":[0,19],"2011apj":2,"2013098041711_lpd":[4,21,27],"2014044044430_lpd":26,"2016pasp":2,"20877502e":12,"22620288e":12,"26a":17,"26it":24,"29075928e":12,"2e5":4,"33k":25,"3498db":[25,26],"36062734e":12,"36265430e":12,"369k":17,"37134399e":12,"40456200e":12,"4116x5x5":12,"42417450e":12,"46it":16,"4_2011265_prf":4,"4e5":4,"54867767e":12,"57194168e":12,"59111652e":12,"60793352e":12,"62548706e":12,"68612289e":12,"6iah9htg6hyg6hyg":23,"71021179e":12,"78k":25,"83133698e":12,"85439270e":12,"99it":26,"9kkkfhhi9hhichhi":23,"\u03c3":26,"boolean":[5,12,13,26],"break":0,"case":[5,10,12,13,14,20,21],"class":[1,6,12,17,24,27],"default":[0,2,3,4,5,6,10,12,13,15,16,20,26],"export":2,"final":12,"float":[0,2,3,4,5,6],"function":[0,1,2,4,11,12,13,14,16,17,18,19,20,21,24,25,26],"import":[0,4,12,13,14,15,16,17,18,19,20,21,23,24,25,26,27],"int":[0,2,3,4,5,6,16],"long":[0,2,3,5,13,14,15,16,17,18,19,20,25,26],"new":[0,2,5,8,10,13,17,18,20,23,24,25,26],"public":[11,25,26],"return":[0,2,3,4,5,6,15,17,21,25,26,27],"short":[3,5,6,27],"static":[3,5,21],"super":[9,29],"true":[0,2,5,12,15,17,21,23,25],"try":[13,20],"vin\u00edciu":7,ADDED:8,Ames:12,And:13,Axes:0,BLS:17,But:[12,21,26],For:[0,2,3,5,12,14,16,18,27],IDs:[21,25],Not:5,OBS:23,One:15,That:8,The:[0,2,3,4,5,6,9,10,11,12,13,14,15,16,17,18,19,20,21,25,26,27],Then:[13,18],There:[12,13,16,17,21],These:[12,13,23],Uses:5,Using:21,WCS:5,Will:3,With:[16,27],Yes:25,_get_eigen_vector:25,_plot_normflux_arclength:26,_plot_rotated_centroid:26,_rotat:25,_subplot:[2,5,12,20,21,23,24,26],abbrevi:25,abl:[18,20],about:[9,10,12,15,16,17,19,21,23,25],abov:[2,10,12,16,18,19,20,21,27],abs:[4,17],accept:23,access:[10,12,13,14,27],accomplish:15,achiev:[25,26],acknowledg:9,across:[3,12],act:13,activ:[5,8,11,15],actual:12,adapt:2,add:[8,11,12,21,23],added:[0,5,11,25],adding:[8,17],addit:[2,4,15,21],addition:4,adjac:15,administr:10,adopt:8,adsab:17,advanc:9,affect:6,aforement:0,after:[2,3,4,21],again:20,against:3,ahead:8,aid:2,aim:[9,25],al_dens:25,algorithm:[0,2,11,16,17,26],align:0,all:[2,3,4,5,10,11,12,13,15,17,18,19,20,21,23,27],allow:[2,14,23],along:[17,25],alongsid:10,alpha:[16,17,21],alphabet:2,alreadi:[10,13],also:[2,7,12,13,15,21,25,26,27],alter:23,altern:[3,5,10],although:13,amplitud:2,anaconda:[10,21,27],analys:9,analysi:[26,28,29],analyt:[2,11],analyz:9,angl:4,ani:[6,13,23],anim:11,animate_spot:11,ann:[7,21],annot:21,anomali:6,anoth:21,answer:15,apart:21,aper:[20,21],aper_mask:15,apertur:[5,6,9,11,12,13,14,17,21,25,26,29],aperture_mask:[5,12,13,15,17,20,21,26,27],aperturecosm:6,api:[9,12,14,16,17,19,21],appaloosa:11,appear:23,append:[2,18,20],appli:[0,2,3,5,17,25,26],applic:18,approxim:17,arang:[17,25],arc3:21,arc:8,archiv:[0,3,4,5,6,12,14,17,23,25,26,27],archive_manu:5,archiveerror:[3,5],arclength:[0,16,25],arcsecond:[3,5,12,21,25],argabrighten:6,argabrighteningonccd:6,argmax:17,argsort:25,argument:[2,3,5,15,17],around:[4,5,12,21,24],arrai:[0,2,4,5,6,12,13,23,25,27],array_split:25,arriv:6,arrow:15,arrowprop:21,arrowstyl:21,artifact:[15,21],arxiv:4,ascens:[12,23],aspect_ratio:25,assembl:5,assign:25,associ:[2,4],assum:[0,2,24],asteroid:12,asterosei:11,asteroseismolog:[11,18],astronom:[9,11,12,24,27,28],astronomi:13,astrophys:[19,21,26],astropi:[2,3,5,6,8,10,12,23,25],astropy_tim:[2,3,5,12],astroqueri:[10,13,15,21,27],astyp:20,attenu:2,attitud:6,attitudetweak:6,attribut:[0,2,3,4,5,13],author:[7,9],autom:[9,11],automat:[15,25,26],avail:[3,5,10,12,15,20,27],avanderb:25,averag:[2,6,13,21],avoid:[13,20,21],awai:17,await:25,axes:[2,5,12,20,21,23,24,25,26],axessubplot:[0,2,5,12,20,21,23,24,26],axi:[0,2,12,15,17,25],back:[0,26],back_mask:15,background:[4,5,9,12,13,15,20,26,30],bad:11,band:[6,9,12,15,30],bar:15,barentsen:7,barrier:9,barycent:[6,12],barycentr:[2,6,12],base:[2,5,11],basi:[0,3,9,14,30],basic:[11,12,17,28,29],batman:11,bay:[0,11],bayes_factor:0,beauti:[9,11],becaus:[10,12],been:[2,3,4,5,11,14,19],befor:[2,14,18,20],beforehand:2,behav:23,behaviour:5,behind:2,being:[14,15],belong:20,below:[7,17,18,19,21,23,25],beneath:15,best:[2,4,17,21,25],best_fit:17,best_period:2,bestap:25,between:[2,14],bewar:12,bia:25,bibtex:7,bigger:[25,26],bin:[0,2,13,16,18,20,21,25],bin_and_interpol:0,bin_mean:25,binari:[11,23],binned_lc:[2,13],binsiz:[2,13],bintabl:23,bintablehdu:23,bitmask:[2,3,5,6],bitpix:[12,23],bitstr:6,bitwis:2,bjd:[6,23,25,26],bjdref:6,bkg:5,bkg_fit:4,bkg_lc:21,bkg_model:4,bkg_param:4,bkjd:[2,6,12],bkjd_to_astropy_tim:6,blip:15,block:[2,9],blue:25,bodi:11,bool:[0,2,5,12,20],both:[2,5,9,14,17,27,28],bottom:[4,15,21],boundari:0,box:[2,17],boyajian:27,branch:8,break_toler:2,breakpoint:[0,25],brief:[8,24],briefli:0,bright:[11,12,13,15,17,20,25,26,27],brows:8,browser:25,bryson:4,bspl:25,bspline:[0,25],bugfix:8,build:[4,9,20,21],built:[13,17,19],button:[8,15],c13:16,c13_lc:16,c13_llc:16,c15_lc:15,c15_lpd:15,cach:[13,15,21,27],cadenc:[2,3,4,5,6,11,12,15],cadenceno:[2,5,12,23],cal:12,calcul:[2,11,25,26],calibr:[4,11,12],call:[5,13,14,17,18,23,24,25,27],callabl:[2,4],campaign:[0,2,3,5,15,25,26],can:[0,2,3,4,5,6,10,11,12,13,14,15,16,17,18,19,20,21,23,24,25,26,27,29],candid:[17,20],canid:20,cannot:5,captur:[18,20],carefulli:13,catalog:2,caus:12,causal:11,cave:11,cbv:[0,3,9,14,30],cbv_flux:0,cbv_lc:0,cbv_list:0,ccd:[6,23],cdpp:[2,13,14],celerit:11,celesti:23,cell:18,center:[4,12,15,16,21],center_col:4,center_row:4,centroid:[0,2,4,5,16,25,26],centroid_col:[0,2,25,26],centroid_row:[0,2,25,26],centroid_typ:3,certain:21,cet:25,cet_kepler_v1_llc:25,cfa:25,chang:[2,15,18,20,21,25,26],channel:[2,3,4,5,6,19,21,23],channel_to_module_output:6,character:11,characterist:0,check:[11,12,13,14,20,21,23,25],checkout:8,checksum:23,choic:[8,26],choos:[13,14,18,20],chosen:25,christina:7,citat:23,cite:9,citizen:9,classif:11,classmethod:6,clean:[15,19,20],clean_flux:25,clean_lightcurv:2,cleaner:14,cleank2lc:23,clear:[16,18],cleve:2,click:[8,15],clip:[2,13,20,23],clone:[8,10],close:[16,21],cmap:26,coars:6,coarsepoint:6,code:[11,26],codi:7,coeff:0,coeffici:[0,2],col:[0,5,25],col_centr:5,collabor:23,collater:[6,11,15],collateralcosm:6,collect:[12,27],color:[2,5,16,17,19,25,26],colorbar:5,column:[0,2,3,4,5,6,12,21,23,25],com:[8,10,17],combin:[2,9,20,29],come:[15,20],command:[10,18],commit:8,common:[2,9,10,12,13,15,29,30],commonli:28,commun:[9,11,25],companion:26,compar:[8,16],complement:11,compon:21,comput:[0,2,4,6,8,25],compute_cotrended_lightcurv:3,compute_sg_nois:2,concaten:2,conceiv:15,concept:[25,26],condit:14,configur:2,conform:[12,23],connect:25,connectionstyl:21,consid:[2,10,23],constant:[2,4],constel:17,construct:21,constructor:5,contain:[0,2,3,4,5,12,14,17,21,23,25],contamin:[12,13,20],context:[2,3,5],continu:[18,20],contribut:[9,20,23],control:[11,15],conveni:26,convert:[6,11,12,13,20,21,23],coordin:[0,2,4,5,12,23,24,25],corner:[4,8,20],corr_flux:25,corr_lc:[16,19],correct:[1,2,3,5,6,9,11,12,16,17,19,21,23,25,26],corrected_lightcurv:0,correctli:[8,25],corrector:[0,19,26],correspond:2,cosmic:[6,12,15],cosmic_rai:12,cost:0,cotrend:[0,3,14,19],could:21,count:[12,17,21,23],cov:25,covari:0,cover:[3,5,12,20,28,29],cpm:11,craft:15,crash:20,creat:[0,2,4,5,11,12,13,14,16,17,18,20,21,24],creation:[12,23],creator:[12,23],cross:[6,15],crowd:[11,20],csv:[2,25],cube:5,current:[2,15],cursor:15,curv:[0,2,3,6,9,11,12,16,17,18,19,20,21,28],custom:[5,9,15,21,29],cut:[5,9,12,29],cwd:21,cygnu:17,d25_lcbv:0,dai:[2,6,12,16,17,20,21,25,26,27],darken:11,data:[0,2,3,4,5,6,9,12,13,14,15,16,18,19,20,21,23,24,27,28,29],datafram:2,datasum:23,date:[6,12,23],datum:15,dec:[2,5,12,24],dec_obj:23,decatur:11,decim:5,declin:[12,23],decod:6,def:[15,25],default_bitmask:6,defin:[0,2,3,4,5,13,15,17],deg:23,degre:[0,5,16],demo:15,demonstr:[13,14,17,24],demostr:23,demystifi:[19,25],depend:[2,15,25],depth:[2,16],deriv:[4,25],desat:6,desatur:6,describ:[0,5],descript:[2,6,8],design:[4,13],detail:[0,3,5,6,14],detect:[11,12],detector:[4,6,21,23],detectoranomali:6,determin:[0,11,12],detrend:23,develop:[2,8,9,11],deviat:2,devoid:26,dfm:11,diagnost:26,dict:[0,2,3,4,5,21],dictionari:[0,2,3,4],differ:[9,12,14,15,19,20,21,25,26,29],differenti:2,difficult:[16,21],dimens:[4,5,12,23],dimension:4,dip:[19,27],direct:4,directli:[12,26],directori:[3,10,24,25],disabl:2,discov:[17,27],discuss:[2,8,20,21],disk:5,displai:[5,27],distribut:[4,10,17,26],divid:[0,2,21],doc:10,docstr:25,doctest:[0,4],document:[6,9,12],doe:[2,9,30],doesn:[18,20],doi:7,doing:18,domain:[0,11],domin:0,don:[18,19,21],done:[0,2,4,14,16,17,19,21,29],dot:25,doubl:[21,25],doubt:8,download:[0,4,12,14,15,16,17,18,19,20,21,23,24,27],drop:15,dropout:[6,15],dtype:[12,13,27],due:[16,19,21],durat:[2,17],dure:[13,16,17,18,26],dynam:6,e67e22:25,each:[0,2,3,4,5,6,12,13,16,18,19,20,21,27],earli:18,earth:6,earthpoint:6,eas:26,easi:[5,11,25,27],easier:[0,12],easiest:10,easili:[12,23,29],ebiue9freafre9fr:23,eclips:11,edit:23,edu:[0,4,5,14,16,17,19,21,23,25,26],effect:21,eig_val:25,eig_vec:25,eigenvalu:25,eigenvector:[0,25],eigh:25,electron:[12,21,27],element:[2,4],empti:6,enabl:[5,9,15,17],encapsul:13,encod:6,encount:[8,21],encourag:8,end:[25,26],eng:26,engin:[25,26],enhanc:8,entail:15,entri:2,enviro:8,ep60021426alldiagno:25,ep60021426alldiagnost:25,epic:[3,5,25],equal:[2,4],equinox:23,erik:11,error:2,estim:[2,4,15,17],etc:[2,12,13],evalu:4,event:[2,6],everest:11,everi:[0,2,4,5,12,13,20],everyon:9,everyth:8,evid:25,exact:25,exactli:2,exampl:[0,3,4,5,12,13,14,15,18,19,21,25,26,27],except:[4,20,26],exclud:[6,26],exclus:25,execut:8,exlud:26,exoplanet:[11,16,18],exot:15,expect:[13,15,21,23,27],experi:[10,19,21],experiment:[2,11],explain:[6,15,23,25,26],exposur:16,ext:5,extend:[12,23],extens:[2,5,10,12,23],extent:12,extnam:[12,23],extra:[2,5,23],extra_data:2,extract:[4,5,11,17,25,27],extrem:25,extver:[12,23],factor:[0,2,15],faint:21,fairli:21,fall:12,fals:[0,2,5,11,12,15,21,23,25,26],famou:27,fast:[2,3,5,11],featur:[2,5,8,21],feb:7,fell:18,fetch:[3,5,8],few:[15,17],fewer:[14,15],ffi:[5,9,11,29],ffiorbust:11,field:[0,2,11,16,20,23,25,26],fig:21,figaspect:25,figsiz:[25,26],figur:[25,26],file:[0,2,3,4,5,6,8,9,11,13,16,17,19,20,21,25,26,27,28,29],filenam:[5,24],fill:2,filter:[2,13,17,25],find:[2,7,11,12,18,20,21,25],fine:[6,11,15],fire:[6,12,13,16,26],first:[0,2,3,5,12,13,17,18,19,20,21,23,24,25,26,27,28],first_2p5_dai:26,fist:18,fit:[0,2,3,4,5,11,12,13,14,15,16,17,19,21,24,25,26,27],fit_bsplin:0,fix:[4,26],flag:[2,3,5,6,10,12,15,25,26],flare:11,flat:[0,2,16,17,25,26],flat_lc:13,flatten:[2,13,16,17,18,20],flatten_lc:2,flattened_lc:2,flatter:14,float32:[12,13,27],flti:11,flux:[0,2,3,4,5,9,11,12,13,14,15,16,17,19,20,21,23,25,26,27],flux_bkg:[5,12],flux_bkg_err:[5,12],flux_err:[2,5,12,17,23],flux_fit:4,flux_typ:3,fname:24,focal:21,focus:25,fold:[2,13,16,17,18,20],folded_lc:13,folded_lightcurv:2,follow:[0,3,4,5,8,10,12,16,21,25,26],forget:21,fork:[8,11],form:[2,18,25],format:[2,6,10,12,17,21,23],fortran:11,fotometri:11,found:[3,5,6,13,15,16,21,27],four:20,fpc:4,fpp:11,frame:[0,5,6,12,20,23,24,25,26,27],free:2,frequenc:2,friendli:9,from:[0,2,3,4,5,6,9,10,11,12,13,14,15,16,17,19,20,21,23,25,26,27,28,29],from_arch:[3,5,12,13,14,15,16,17,18,19,20,21,23,27],from_fits_imag:[5,24],full:[0,6,12,16,24],further:26,futur:26,fuzzi:15,galaxi:11,gap:2,gaussian:[2,11],gcount:23,geert:7,gener:[0,2,4,5,10,11,14],get:[5,9,10,15,21,25,26,28],get_bkg_lightcurv:5,get_cbv_url:0,get_cbvs_list:0,get_coordin:5,get_initial_guess:4,get_lightcurv:3,get_prf_model:[4,5],get_residu:4,gif:11,gilliland:2,git:[8,10,17],github:[7,9,10,17],give:[6,7,12,21,27],given:[0,2,3,4,5,6,12,24,25],glob:24,goal:15,going:[19,20,21],golai:[2,13,17],good:[3,5,25],gov:8,grad_prf:4,gradient:4,grai:26,great:[11,20,23],grid:[2,11],grip:28,group:23,guess:4,guest:[8,9,15],guidanc:[11,15],guidelin:23,gulli:7,halo:11,halophot:11,hand:[9,15],handbook:21,handl:2,hard:[3,5,6],hard_bitmask:6,hardest:[3,5,6,27],hardest_bitmask:6,harvard:[17,25],has:[3,4,5,10,13,14,16,19,21,23,25],have:[2,10,11,12,13,14,15,17,18,19,20,23,24,25,26,27],haz:11,hdu:[2,5,23],hdulist:5,head:[8,25],header:[2,5,12,23,25],heat:19,hedg:7,hedges2018:23,henc:[2,3,5],here:[12,13,14,16,17,26],high:[9,23,25],highli:25,highlight:5,hint:16,hit:[3,15],hlsp:[23,25],hlsp_guidelines_timeseri:23,hlsp_k2sff_k2_lightcurve_060021426:25,hlsplead:23,hlspname:23,hold:[12,17,20],home:[10,21],hope:26,host:16,hour:2,hover:15,how:[2,8,9,10,26,28,29,30],howev:[0,18,19,20,21],hst:11,html:[10,23],http:[0,4,5,7,8,10,14,16,17,19,21,23,25,26],human:[6,12],icr:23,idea:2,ident:[4,26],identifi:[5,9,23,25,26,30],ignor:[2,3,5],iid:2,illustr:26,imag:[4,5,12,15,20,23,24,26,27],imagehdu:5,implement:[0,2,11,17],improv:[13,25],impuls:6,impulsiveoutli:6,imshow:4,includ:[2,10,12,13,21,23,28],incomplet:15,increas:[16,21],independ:[0,16],index:[2,5,26],index_col:25,indic:[2,15],individu:[2,11,15],induc:[11,15],infer:11,infinit:13,info:[13,15,21,27],inform:[12,13,15,23],initi:[4,5,15],inject:11,inlin:[12,13,20,21,24,25,26,27],input:[2,25],insid:[5,21],inspect:[5,9,12,25,28],instal:[8,9,17,27],instanc:[0,4,5],instant:2,instanti:26,institut:[12,23],instrum:23,instrument:[15,16,21],integ:[2,5],integr:[0,4],integrand:0,intend:5,intent:0,interact:[5,9,11,17,28],interest:[9,12,17],interfac:[4,11],interior:25,interior_knot:25,internet:10,interp1d:25,interp_func:25,interpol:[0,4,16,25],intrigu:27,introduc:[15,25,26],introduct:9,intuit:12,invalid:21,invers:2,invit:9,ipykernel_launch:21,ipython:5,isnan:15,iso:12,isochron:11,isoclassifi:11,isol:27,issu:9,item:20,iter:[0,2,16,20],iterative_box_period_search:2,its:[2,8,10,15,24,26],januari:6,jeff:2,job:[12,23],johnson:[0,9,25,30],johsnon:25,join:18,jointprior:4,julian:[6,12],jump:11,jupyt:[5,15,18],just:[12,19,20,26],jvc:2,jwst:11,k2ephem:11,k2flix:11,k2fov:11,k2mosaic:11,k2p:11,k2phot:11,k2photometri:11,k2pipelin:11,k2plr:11,k2sc:11,k2sff:26,kadenza:11,keep:[25,26],keep_indic:26,kei:[15,25],kepcal:11,kepfg:11,kepler:[0,2,3,4,5,6,8,9,11,12,13,14,15,16,19,20,21,23,25,26,27,28,29],kepler_orreri:11,keplercbvcorrector:[0,3,19],keplergo:[7,8,10],keplerid:[2,3,5,21,23],keplerlightcurv:[2,3,5,13,14,16,17,18,20,21,27],keplerlightcurvefil:[0,3,14,16,18,19,21,23],keplerport:11,keplerprf:4,keplerqualityflag:[3,5,6],keplersci:10,keplersmear:11,keplertargetpixelfil:[4,5,12,13,15,16,17,20,21,23,24,26,27],kepprf:4,keputil:11,ketu:11,keyboard:15,keyword:[2,3,5,12,13,15,16,17,23,24,25],kic:[3,5,14,20,27],kind:14,knot:25,known:[3,5,9,27,29],koi3278:11,koi:11,kplr006922244:[13,14],kplr006922244_lc_q111111111111111111:[13,14],kplr007691027:21,kplr007691027_lc_q011111111111111111:21,kplr007691061:21,kplr007691061_lc_q011111111111111111:21,kplr008462852:[0,4,19,27],kplr008462852_lc_q111111111111111111:[19,27],kplr011904151:17,kplr011904151_lc_q111111110111011101:17,kplr060021426:26,kplr13:4,kplr16:4,kplr2011073133259:0,kplr:11,ktransit:11,ktwo247887989:16,ktwo249928278:15,kwarg:[2,3,4,5],label:[0,2,16,19,21,26],lack:[2,25],lambda:4,laplacianlikelihood:0,laplacianprior:0,larg:[2,15,21],larger:2,later:[10,25],latest:[10,27],latex:21,latter:25,lc1:18,lc2:18,lc_aper:15,lc_back:15,lc_bg_sub:15,lc_cln:15,lc_correct:26,lc_file:0,lc_raw:26,lc_trim:26,lcf:[3,14,16,19,23],lcp:11,ldtk:11,leap:[6,12],least:[17,25],leav:21,left:[4,15,19],legend:0,len:21,length:[2,6,23,25],less:[2,21,26],lesssim:21,let:[8,12,13,14,16,17,19,20,21,23,24,25,27],level:[11,12,14,15,21,23],lib:21,librari:11,light:[0,2,3,6,9,11,12,16,17,18,19,20,21,28],lightcurv:[0,1,3,5,6,9,11,12,13,14,16,17,19,21,23,25,26,27,28,29],lightcurvefil:[1,14],lightkurv:[0,2,3,4,5,6,11,12,13,14,15,16,17,18,19,20,21,23,24,27],like:[0,2,4,5,8,12,15,16,17,19,20,21,23,26,27],likelihood:0,limb:11,limit:[0,2,3,5,15,21],linalg:25,line:[2,4,12,13,25],linear:[0,2,25,26],linestyl:[19,27],link:25,linspac:25,list:[0,2,3,4,5,6,10,11,12,15,18,20,21],live:27,load:[4,17,20,26,28],local:[15,17,24],locat:[4,15],log:[2,8,17],log_posterior:2,logarithm:15,long_cad:26,long_term_trend:26,look:[12,14,16,17,19,20,21,23,25,26,27,29],loop:[18,21],loss_funct:4,lossfunct:4,lot:12,low:2,lower:[4,9,15],macula:11,made:[2,14,16,23],magic:18,mai:[2,4,10,11,12,15,20,23,26],mail:8,main:8,major:25,make:[0,5,8,10,11,12,16,21,23],mani:[11,12,13,20,21],manual:[5,6],manualexclud:6,mari:7,mark:[2,21],markers:0,mask:[2,3,5,6,12,13,15,17,20,21,25,26],mask_color:[5,20,26],maskind:25,masktyp:25,mast:[3,5,12,13,14,16,17,19,21,23,25],mastdownload:[13,14,15,16,17,19,21,27],match:2,math:4,matlab:[2,11],matplotlib:[0,2,3,4,5,10,12,13,17,20,21,23,24,25,26,27],matrix:[0,4],max:25,max_period:2,maxim:[0,2],maximum:2,mazeh:11,mcmc:11,mean:[2,3,4,5,6,10,12,21,25],measur:[0,2,4,12,13],median:[2,25],mental:15,messag:18,meta:[2,12,13,14],metadata:[2,5,12,25],method:[0,2,3,4,5,6,9,12,13,14,15,16,17,18,23,26,27,30],metric:[2,13,14],michael:7,microlens:11,might:[12,20,28],million:2,min:[2,25],min_period:2,mind:13,minim:[0,4],minimum:2,minor:25,minorticks_on:25,minu:6,mirca:17,misc:7,miss:[15,20],mission:[0,2,3,4,5,9,11,12,13,14,16,17,18,19,21,23,25,28],mitig:21,mode:[2,6],model:[2,4,11],modern:10,modest:25,modifi:8,modul:[5,6,11],module_output_to_channel:6,mom_centr:3,moment:[4,5,15],month:[3,5,7],more:[3,5,10,12,13,14,16,17,19,21,23,25],mosaic:[11,24],most:[10,12,15,19,26],motion:[0,2,9,15,25,26,30],move:[6,15,16,21],movi:11,much:25,mulensmodel:11,multi:11,multipl:[2,3,5,16],multipli:0,murzim:2,must:[2,14],my_custom_lc_clean:15,name:[2,3,5,8,12,23,27],nan:[0,2,5,12,13,15,16,19,20,23],nan_time_mask:5,nasa:[0,2,3,8,9,11,12,14],naxi:[12,23],naxis1:23,naxis2:23,ndarrai:[0,5],nearbi:[12,13,20,21],nearest:21,neat:26,necessari:[4,5,10],need:[3,5,25],neighbor:21,neighbour:21,new_lc:2,next:[12,17,25,27],nextend:[12,23],niter:[0,2,16,26],nodata:6,nofinepoint:6,nois:[2,4,9,11,13,14,15,16,30],non:[2,15,25,26],none:[0,2,3,4,5],nonzero_quality_flag:26,norm:0,normal:[0,2,12,13,18,21,25,26],normalized_lightcurv:2,normflux:0,note:[0,2,5,12,13,17,18,20],notebook:[5,15,18,25,26],now:[2,8,12,13,14,16,17,18,19,20,21,23,24,25],nperiod:2,npix:21,npixsap:25,npy:[25,26],number:[0,2,3,4,5,6,12,15,16,21,23],numer:[0,2],numpi:[2,5,10,12,13,15,17,20,21,24,25,26],numpydoc:10,nutella:11,nyquist:2,object:[0,2,3,4,5,6,9,11,16,17,18,20,21,23,27,28],observ:[3,5,8,9,11,12,15,18,19],obsmod:[3,5],obtain:[2,5,9,11,26,27],occur:[2,13],odd:2,off:15,offer:9,offic:[8,9,15,23],offici:2,offset:18,often:[12,21],oktopu:[0,4],onc:[8,23],one:[0,2,3,5,12,13,14,15,16,17,18,20,26,27],onli:[2,3,4,5,12,13,14,15,17,19,20,21,25,26],onlin:10,onto:[0,4,12],open:[3,8,9,11,12,13,23,25],oper:13,opportun:25,oppos:2,opt_param:4,opt_result:0,optim:[0,2,4,6],option:[0,2,5,6,10,15],orbit:11,order:[2,4,24,25],org:[0,4,7,10],origin:[2,4,8,12,23,24,25],orreri:11,other:[0,2,9,16,18,19,21,25,26],otherwis:2,our:[7,13,15,17,20,21,23,25,26],out:[2,5,9,12,13,14,16,18,19,20,21,23,25,26,27,29],outer:15,outermost:15,outlier:[0,2,6,13,15,16,19,20,23,26],output:[5,6,17,18],output_fn:5,over:[5,12,13,15,16,21,27],overal:26,overlai:11,overwrit:[2,5,23],owing:26,own:[9,13,20],oxkeplersc:11,p5_deriv:25,packag:[7,9,10,11,17,21,26,27],page:11,pair:[4,6],pan:15,panda:[2,25],pandexo:11,paper:[25,26],param:4,paramet:[0,2,3,4,5,6,16,23],parametr:4,part:2,particular:[9,12,13,21],pase:3,pass:[0,2,3,4,5,12,13,16,17,24,25],patch:8,path:[0,2,3,5,17,21,23],path_or_buf:2,pathnam:26,pcount:23,pdcsap:[14,23],pdcsap_flux:[3,14,16,18,23],pdf:5,per:[2,21],perform:[4,5,9,11,21,25,29],performac:26,perhap:26,period:[2,13,15,16,17,18,20],period_scal:2,periodogram:17,permissionerror:10,petigura:11,phase:[2,18,20],phot:4,photocent:15,photodynam:11,photomet:23,photometr:2,photometri:[1,5,9,11,12,13,14,17,25,29],pick:19,piec:[0,16],piecewis:[0,25],pink:[5,26],pip:[8,10,17,27],pipelin:[2,5,9,11,12,13,14,15,17,20,21,23,26],pipeline_lc:20,pipeline_mask:[5,12,13,15,17,20,21,26],pix:11,pixel:[4,5,6,9,11,13,14,16,17,18,20,21,25,26,27,28,29],place:9,plai:15,plain:25,plane:21,planet:[5,9,18,20,21,26,29],planetplanet:11,planetz:11,plate:25,platescal:25,pld:11,pleas:[7,8,11],plot:[0,2,3,4,5,12,13,14,15,16,17,18,19,20,21,23,24,25,26,27],plot_cbv:[0,19],plot_imag:5,plt:[0,4,17,20,21,25,26],point:[0,2,6,11,12,13,14,15,25,26],poissonposterior:4,poly1d:25,polyfit:25,polynomi:[0,2,16,25],polyord:[0,2,16,26],poor:26,popular:25,pos_corr1:[3,5,12],pos_corr2:[5,12],pos_corr:5,posit:[2,3,4,5,12,24,25],poss_corr2:3,possibl:[6,11],possiblethrusterfir:6,postag:[12,15],posterior:[2,4],powel:[0,4],power:17,ppm:2,pre:[5,11,13,14],precis:[2,25],predat:25,predomin:25,pregener:14,present:[3,5,21],previou:[13,14,18,20,21,26,29],prf:[4,5,25],prf_aper_tbl:25,prf_model:4,prfphotometri:4,primari:[2,12,23],primaryhdu:23,prime:[3,5,11],print:[2,12,17,18,21,25],prior:[0,4,11],prioriti:5,probabl:[2,11,19],problem:[8,11,16],proce:26,procedur:2,process:[0,5,11,14,15],produc:[11,20,23],product:[2,6,11,23],profil:11,program:[12,23],programmat:25,project:9,properti:[2,11,12],provid:[2,4,5,7,9,11,13,17],proxi:2,psf:[1,12,15],pub:26,publish:[25,26],pull:11,purpos:11,push:8,put:26,pyke:11,pymacula:11,pyorbit:11,pyplot:[0,2,3,4,5,13,17,20,21,25,26],pysysrem:11,pysyzygi:11,python3:21,python:[9,10,11,18,20,26,27],pytransit:11,q08:0,qualiti:[2,3,5,6,9,11,12,15,23,25,26],quality_bitmask:[2,3,5,27],quarter:[2,3,5,9,12,13,14,17,19,20,21,23,27,29],queri:[13,15,21,27],quest:2,question:15,quick:[16,23],quickli:29,quicklook:11,quickstart:9,quiet:21,quirk:25,quit:21,ra_obj:23,rad:21,radesi:23,radial:11,radian:4,radiu:[3,5,21],radvel:11,rai:[6,12,15],rais:[2,3,5,6],ramp:19,ran:0,random:[4,23],rang:[2,13,18,20],rather:[14,20],ratio:2,raw:[0,5,11,12,21,25,26],raw_cnt:12,raw_flux:25,rb_level:12,read:[10,11,12,14,16,17,19,21,23],read_csv:25,readabl:[6,12],readi:8,readm:23,real:[15,21],realli:[11,20],recap:20,recent:15,recommend:[2,3,5,8,10,27],record:[5,6],recov:[9,29],red:[15,17,20],reduc:[11,13],reduct:11,ref_col:4,ref_row:4,refer:[0,2,4,5,6,12,23,25],region:[2,5,11],regress:25,regular:15,reject:[0,2],rel:[13,20,25,26],relat:[11,12],releas:[26,27],remain:2,remaind:2,rememb:16,remot:8,remov:[0,2,3,5,9,13,14,15,17,18,20,21,23,30],remove_nan:[2,13,16,19,20,23],remove_outli:[2,13,15,16,20,21,23],repeat:0,replic:[9,25,30],repo:2,report:[2,9],repositori:[7,8],repres:[2,4],represent:15,reprocess:26,reproduc:26,request:[11,25],requir:[17,23],research:7,resolut:13,resolv:25,respect:[2,4,15],respectivelli:[0,4],respons:[4,12,23,25],restore_trend:0,result:[0,2,4,6,21,25,26],retain:2,retriev:12,return_mask:2,return_trend:[2,17],reveal:27,right:[2,8,12,15,20,23],ring:15,robovett:11,rocki:17,roll:[6,9,12,15,30],rollingbandinapertur:6,rollingbandinmask:6,root:2,rot_colp:25,rot_rowp:25,rotat:[0,4,11,21,25],rotate_centroid:0,rotation_angl:4,routin:2,rovjsnsjrnsjrnsj:23,row:[0,2,3,4,5,12,21,25],row_centr:5,run:[2,6,10,15,16,17],running_mean:6,runtimewarn:21,s_integrand:25,safe:6,safemod:6,same:[2,5,14,16,17,18,19,20,21,23,25,26],sampl:[2,4,5,25,26],santiago:7,sap:[13,14,19],sap_flux:[0,3,14,19],sap_lc:0,sapflux:14,save:[23,25,26],savgol_filt:2,savgol_polyord:2,savgol_window:2,savitski:2,savitzki:[2,13,17],scalar:4,scale:[2,4,12,15,17,25,26],scale_col:4,scale_row:4,scatter:2,scene:4,scene_model:4,scenemodel:4,scienc:[9,12,23],scientif:[10,11],scientist:9,scipi:[0,2,4,10,25],screen:[15,21],search:[2,3,5,14,17,21,26],second:[6,12,21,23,27,28],section:[6,28,29],see:[0,3,5,6,8,12,13,14,15,16,19,21,25],seen:12,select:[5,11],self:[0,2,11,16,25,26],sensit:[6,15],sensitivitydropout:6,sensor:[11,15],sent:25,separ:[2,17,21],seri:[4,9,13,24,27,28],set:[0,2,3,5,12,13,20,21,23,24,25,27],set_titl:[2,21],setup:8,sever:[2,12],sff:[0,2,9,26,30],sffcorrector:[0,26],sgcdpp:2,shade:2,shape:[4,5,12,13,20],share:23,shorter:25,shortli:17,should:[2,3,5,8,15,25],show:[5,11,12,15,16,17,21,26,29],show_colorbar:[5,26],shown:[5,12,15,17,21],shrinkag:11,side:15,sigma:[0,2,12,13,20],sigma_1:0,sigma_2:0,sigma_clip:2,signal:[2,11,13,16,17,20,21],signatur:[2,11],signific:[8,18,19],similar:[14,21,25,26],simpl:[2,4,11,12,13,14,15,17,20,21,23],simplekeplerprf:[4,5],simpler:2,simpli:[10,12,13,20,23,27],simul:24,simultan:[11,15],sinc:21,singl:[12,13,20],site:21,size:[2,4,5,13,15,20,21,24,27],skip:[0,4],skope:11,sky:11,skycoord:5,slice:[6,25,26],slider:15,slightli:[14,26],slope:26,slow:5,small:[19,21],smallest:25,smart:0,smear:15,smooth:0,softwar:9,solar:[6,11],solid:27,solut:5,solv:[2,11],some:[12,14,18,20,21,23,25,26,28,29],someth:8,sometim:[15,25],sort:[2,5,24,25],sorted_ind:25,sourc:[0,2,3,4,5,6,9,12,21,26],space:[9,11,15],spacecraft:[0,16,18,19,25,26,27],span:0,specif:[2,12,13],specifi:[2,3,4,5],sphinx:10,spline:[0,25],split:[2,12],splrep:25,splt:25,spot:[11,21],spread:[11,12],spuriou:21,sqrt:[21,25],squar:[2,17,25],ssh:2,stabl:27,stack:12,stage:25,stamp:[9,11,12,13,15,29],standard:[2,8,12,23,24,25],star:[7,11,12,13,16,17,19,20,21,27],starspot:11,start:[8,9,23,26,27],stat:2,state:25,statist:2,steeper:26,stellar:[11,21],step:[0,2,8,17,20,21],still:[13,20,21],stitch:[18,20],stitched_lc:18,store:[2,17],str:[0,2,3,4,5,6],straight:[10,17],strength:[13,21],stretch:15,string:[2,3,5,6,23],strong:21,strongli:2,structur:26,stsci:[0,4,5,14,16,17,19,21,23,25,26],student:9,style:[2,3,5],sub:2,subclass:[0,4,13],subdivid:[0,16],submit:[8,23],subplot:21,subsequ:0,subspac:0,subtl:26,subtract:[15,25,26],sudden:[6,15],suggest:[8,21,23,25],sum:[5,12,13,15,20,25,27],summari:2,sun:17,superstamp:[5,11,21,24],superstampfit:11,suppli:[5,25],support:[2,9,26],supress:18,sure:8,survei:11,svn:2,sweater:15,synchron:11,synthet:11,sys:21,sysrem:11,system:[5,6,11,23,27],systemat:[1,2,9,11,26],syzygi:11,tabbi:[19,27],tabl:[2,6,11,23],tag:26,tailor:9,take:[6,9,12,13,17,19,20,21,23],taken:12,talk:15,tamuz:11,tantamount:0,targ:[4,13,15,17,21,26,27],target:[3,5,9,11,13,14,16,17,18,19,20,21,23,25,26,28,29],target_id:5,target_pixel_fil:[4,17,21],targetlimit:[3,5,21],targetpixelexporterpipelinemodul:12,targetpixelfil:[1,13],task:[25,28,29],tdb:[2,6,12],teach:16,techniqu:[21,25],telescop:[9,11,12,13,23],temperatur:18,tend:[5,10],term:[0,2,13,14,16,17,18,19,20,25,26],termin:10,terra:11,terrestri:5,tess:[2,3,5,9,11,12,13,29],tesslightcurv:[2,13],tesslightcurvefil:3,tessqualityflag:[3,6],tesstargetpixelfil:12,test:[21,26],text:[21,25],textcoord:21,tfield:23,tform1:23,tform2:23,tform3:23,tform4:23,tform5:23,than:[2,3,5,14,15,20,26],thei:[2,12,13,16,18,19,29],them:[8,12,17,18,20,21,25,26],themselv:12,therefor:2,thereof:3,thi:[0,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,23,24,25,26,27,28,29],thing:15,third:17,those:[10,20],though:15,thought:12,three:[3,5],through:[14,15,18,20,21,26],thruster:[6,12,13,16,25,26],thrusterfir:6,ticid:[2,3],tick:15,tidal:11,time:[0,2,3,4,5,6,9,11,12,13,14,15,17,20,23,24,25,26,27,28,30],time_format:2,time_scal:2,timecorr:[6,12],timeslic:12,timestamp:12,timslic:6,tini:27,tip:15,titl:[2,7,12,25],to_csv:2,to_fit:[2,5,23],to_lightcurv:[5,13,15,17,20,21,24,26,27],to_panda:2,to_tabl:2,togeth:[18,20],toggl:15,too:[5,18],took:[12,18],tool:[11,12,15],toolkit:[11,26],top:[8,20],total:4,tpf:[4,5,11,12,13,15,17,20,21,24,26,27],tpf_flux:4,track:[25,26],tradeoff:25,tradit:25,transform:25,transit:[2,11,16,17,18],transit_dur:2,transit_periodogram:17,translat:4,trappist1:11,trappist:11,trapz:25,travel:12,trend:[0,2,11,13,14,16,17,18,19,20,25,26],trend_lc:2,trial:2,trial_period:2,trunk:2,ttvfast:11,ttype10:12,ttype11:12,ttype12:12,ttype13:12,ttype1:[12,23],ttype2:[12,23],ttype3:[12,23],ttype4:[12,23],ttype5:[12,23],ttype6:12,ttype7:12,ttype8:12,ttype9:12,ttype:12,tune:16,tunit1:23,tunit2:23,tunit3:23,tupl:[2,5,6],turn:[2,12,18],tutori:[8,9,12,13,14,15,16,17,18,20,21,24,28],tvguid:11,tweak:6,two:[0,2,3,4,5,14,16,19,21,25,26],type:[2,3,12,14,17,23,28],typic:15,u23:12,uncertain:12,uncertainti:[2,5,12],uncom:25,underli:26,unfortun:[18,21],uniformprior:4,uniqu:[3,5,12,23],unit:[2,12,23,24,25,27],unless:[5,10],unnam:5,unoffici:23,unspecifi:5,until:17,updat:23,upgrad:10,upon:2,upper:[0,15],upstream:8,uri:[14,16,17,19,21],url:[3,7,14,16,17,19,21],use:[2,4,5,11,12,13,14,16,17,18,19,20,21,23,24,25,26],used:[0,2,5,6,12,13,14,16,19,20,23,25],useful:[7,13,18,26],user:[5,9,10],user_lc:20,usernam:8,uses:[15,25],using:[2,4,5,7,9,10,11,12,13,14,16,17,18,20,25,27,28],usual:[12,14,15],ut1:2,utc:[2,6],util:[1,5],valid:20,valu:[0,2,4,5,6,12,13,20,21,23,25,27],valueerror:2,van:2,vanderburg:[0,2,9,30],vari:21,variabl:[9,11,17,19,30],varianc:25,variat:[4,11,21,26],variou:[2,6],vdb_fit:25,vdb_j_2014_mask:[25,26],vdb_j_mask:[25,26],vector:[0,3,9,14,25,30],veloc:11,verbos:23,veri:[11,12,13,21,26],veric:15,version:[0,2,8,12,16,23,25,27],versu:25,vespa:11,vestig:25,via:[8,12],video:21,view:[11,12],visibl:18,visual:15,wai:[0,9,10,14,18,20,21,23],want:[8,10,12,14,19,20,21,23,25,28],wasp:15,waveform:2,wavelet:2,wcs:5,weight:25,welcom:8,were:[2,12,17,26],wget:25,what:[9,16,23,25,28],wheel:[25,26],when:[5,16],where:[2,4,12,20,21,25,26],whether:[2,5,11],which:[0,2,4,5,6,9,10,12,13,14,15,16,17,19,20,21,23,25,26,27],whilst:2,who:23,whole:2,whose:5,widget:[5,15],width:[2,4],wiki:0,wikipedia:0,window:[0,2,6,10,16,17,19,26],window_length:[2,13,16,17,18],window_s:6,wise:[0,16],wish:[15,20],within:[3,5,12,21,25],work:[5,9,11,12,13,14,16,18,20,23,26,27,28,30],workflow:19,world:5,would:[2,8,12,13,19,21,23],wrap:2,wrapper:11,write:[2,5,10],written:11,www:25,x0_prime:25,x1_prime:25,x_dens:25,x_fit:4,xlabel:[2,25,26],xlim:[20,25,26],xmax_prim:25,xtension:23,xtick:25,xycoord:21,xytext:21,y_fit:4,year:[7,12,17],yet:0,yield:25,ylabel:[2,25,26],ylim:[20,25,26],you:[3,5,7,8,10,12,13,14,15,16,17,19,20,21,23,24,25,26,27],your:[7,8,10,11,13,15,20,21,23,27],ytick:25,zenodo:7,zero:[6,20,26],zerocross:6,zoom:15,zucker:11},titles:["Systematics correction classes","API documentation","LightCurve classes","LightCurveFile classes","PSF photometry classes","TargetPixelFile classes","Utility functions","Citing and acknowledging lightkurve","Contributing and reporting issues","Welcome to lightkurve!","Installation","Other software","What are Target Pixel File objects?","What are Light Curve objects?","What are Light Curve File objects?","Interactively inspecting Target Pixel Files and Lightcurves","How to remove K2 motion systematics with SFF","How to recover a known planet in Kepler data","How to combine lightcurves from different Kepler quarters","How to remove common systematics using basis vectors (CBVs)","How to perform aperture photometry with custom apertures","How to identify time-variable background noise (\u201crolling bands\u201d)?","How to mask data using slicing","How to output KeplerLightCurve\u2019s to fits files","How to cut out Target Pixel Files from Kepler Super Stamps or TESS FFIs","How does the SFF method work?","Replicating Vanderburg &amp; Johnson 2014 using lightkurve","Quickstart","Introduction to lightkurve","Science with lightkurve","Systematics correction using lightkurve"],titleterms:{"class":[0,2,3,4,5],"function":6,"super":24,Using:15,access:11,acknowledg:7,analysi:11,apertur:20,api:1,astrophys:11,background:21,band:21,basi:19,build:10,cbv:19,chang:8,cite:7,code:8,combin:18,common:19,contribut:8,correct:[0,30],curv:[13,14],custom:20,cut:24,data:[11,17,22,25,26],detrend:11,develop:10,diagnost:25,differ:18,document:[1,8,10],doe:25,eng:25,exclus:26,ffi:24,file:[12,14,15,23,24],fit:23,frame:11,from:[18,24],full:11,github:8,guidelin:8,how:[16,17,18,19,20,21,22,23,24,25],identifi:21,imag:11,inspect:15,instal:10,interact:15,introduct:28,issu:8,johnson:26,k2sff:25,kepler:[17,18,24],keplerlightcurv:23,known:17,light:[13,14],lightcurv:[2,15,18],lightcurvefil:3,lightkurv:[7,8,9,10,26,28,29,30],manual:25,mask:22,metadata:11,method:25,motion:16,nois:21,object:[12,13,14],other:11,out:24,output:23,pass:15,perform:20,photometri:[4,20],pixel:[12,15,24],planet:[11,17],popul:11,posit:11,preprocess:15,propos:8,provid:25,psf:4,pull:8,quarter:18,quickstart:27,recov:17,remov:[16,19],replic:26,report:8,reproduc:25,request:8,requir:10,retriev:25,roll:21,scienc:[11,29],search:11,sff:[16,25],slice:22,softwar:11,sourc:25,stabl:10,stamp:24,statist:11,systemat:[0,16,19,30],target:[12,15,24],targetpixelfil:5,tess:24,test:25,time:21,using:[8,19,22,26,30],util:6,vanderburg:[25,26],variabl:21,vector:19,version:10,welcom:9,what:[12,13,14],work:25}})