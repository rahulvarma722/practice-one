import { directive } from "@babel/types";
let icons_ = [
    "activity",
"corner-down-left",
"corner-down-right",
"corner-left-down",
"corner-left-up",
"corner-right-down",
"corner-right-up",
"corner-up-left",
"corner-up-right",
"cpu",
"credit-card",
"crop",
"crosshair",
"database",
"delete",
"disc",
"dollar-sign",
"download",
"download-cloud",
"droplet",
"edit",
"edit-2",
"edit-3",
"external-link",
"eye",
"eye-off",
"facebook",
"fast-forward",
"feather",
"file",
"file-minus",
"file-plus",
"file-text",
"film",
"filter",
"flag",
"folder",
"folder-minus",
"folder-plus",
"gift",
"git-branch",
"git-commit",
"git-merge",
"git-pull-request",
"github",
"gitlab",
"globe",
"grid",
"hard-drive",
"hash",
"headphones",
"heart",
"help-circle",
"home",
"image",
"inbox",
"info",
"instagram",
"italic",
"layers",
"layout",
"life-buoy",
"link",
"link-2",
"linkedin",
"list",
"loader",
"lock",
"log-in",
"log-out",
"mail",
"map",
"map-pin",
"maximize",
"maximize-2",
"menu",
"message-circle",
"message-square",
"mic",
"mic-off",
"minimize",
"minimize-2",
"minus",
"minus-circle",
"minus-square",
"monitor",
"moon",
"more-horizontal",
"more-vertical",
"move",
"music",
"navigation",
"navigation-2",
"octagon",
"package",
"play-circle",
"plus",
"plus-circle",
"plus-square",
"pocket",
"power",
"printer",
"radio",
"refresh-ccw",
"refresh-cw",
"repeat",
"rewind",
"rotate-ccw",
"rotate-cw",
"rss",
"save",
"scissors",
"search",
"send",
"server",
"settings",
"share",
"share-2",
"shield",
"shield-off",
"shopping-bag",
"shopping-cart",
"shuffle",
"sidebar",
"skip-back",
"skip-forward",
"slack",
"slash",
"sliders",
"smartphone",
"speaker",
"square",
"star",
"stop-circle",
"sun",
"sunrise",
"sunset",
"tablet",
"tag",
"target",
"terminal",
"thermometer",
"thumbs-down",
"thumbs-up",
"toggle-left",
"toggle-right",
"trash",
"trash-2",
"trending-down",
"trending-up",
"triangle",
"truck",
"tv",
"twitter",
"type",
"umbrella",
"underline",
"unlock",
"upload",
"upload-cloud",
"user",
"user-check",
"user-minus",
"user-plus",
"user-x",
"users",
"video",
"video-off",
"voicemail",
"volume",
"volume-1",
"volume-2",
"volume-x",
"watch",
"wifi",
"wifi-off",
"wind",
"x",
"x-circle",
"x-square",
"youtube",
"zap",
"zap-off",
"zoom-in",
"zoom-out"];

const { registerBlockType } = wp.blocks;
const { RichText,InspectorControls,ColorPalette,MediaUpload,MediaUploadCheck,BlockControls,AlignmentToolbar } = wp.blockEditor;
const { PanelBody,IconButton,RangeControl,Toolbar,DropdownMenu,ToggleControl,ColorPicker } = wp.components;


registerBlockType( 'wpgt-blocks/icon-block', {
	title: 'Themehunk Icon Block',
    icon: 'star-empty',
    description: 'Use a slide title for your main title for the slide.',
    category: 'wpgt-category',
    attributes:{
            iconClass:{
                type:'string',
                'default':'feather-star',
                'value':'feather-star',
            },
            iconColor:{
                type:'string',
                default:'red'
            },
            iconBgColor:{
                type:'string',
            },
            iconFontsize:{
                type:'number',
                default:34
            },
            iconAlignment:{
                type:'string'
            }

    },
    edit: ( {attributes,setAttributes} ) => {
   
        const {iconColor,iconBgColor,iconFontsize,iconAlignment} = attributes;
        function iconColorChange(color){
            setAttributes({iconColor:color});
        }
        function iconBgColorChange(colorBg){            
            setAttributes({iconBgColor:colorBg.hex});
        }
        function chooseIcon(e){
            setAttributes({iconClass:'feather-'+e.target.value});
        }
        function changeFontSize(e){
            setAttributes({iconFontsize:e });
        }
        function iconAlignment_(e){
            setAttributes({iconAlignment:e });
        }

        return ([
        <InspectorControls>
            <PanelBody title={'Icon Setting'} initialOpen={ false }>
            <div className="wpgt-radio-container" onChange={ chooseIcon } >
               {
                icons_.map(iconValue=>{
                    return (<div className="wpgt-radio-wrapper">
                        <input 
                            id={"wpgt-Radio-"+iconValue} 
                            type="radio" 
                            name="wpgt-choose-icon" className="radio-input"
                            value={iconValue}
                        />
                        <label htmlFor={"wpgt-Radio-"+iconValue}><i className={ 'feather-'+iconValue }></i></label>
                    </div>);
                })
               }
               </div>     
            </PanelBody>

            <PanelBody title={'Icon Color Themehunk'} initialOpen={ false }>
                <ToggleControl
                    label="Custom Toggle"
                    onChange={(e)=>{ console.log('helloe',e) }}
                />
                <p><strong> Choose Icon Color</strong></p>
                <ColorPalette onChange={ iconColorChange } />
                <p><strong>Choose Icon Background Color</strong></p>
                <ColorPicker onChangeComplete={ iconBgColorChange } />
                <p><strong>Font Size </strong></p>

                <RangeControl
                    label="Font Size label"
                    value={ iconFontsize }
                    min={0}
                    max={100}
                    onChange={ changeFontSize }
                />
            </PanelBody>
        </InspectorControls>,
            <>
            <BlockControls
                controls = {[
                    [{
                        icon:'wordpress',
                        title:'on1',
                        onClick:()=>{console.log('yes one1')},
                        isActive:false
                    }],
                    [{
                        icon:'image-filter',
                        title:'on2',
                        onClick:()=>{console.log('yes one2')},
                        isActive:false
                    }]
                ]}
            >
                <AlignmentToolbar
                    value={ iconAlignment }
                    onChange={ iconAlignment_ }
                />
                <Toolbar
                isCollapsed
                  controls = {[
                    [{
                        icon:'admin-generic',
                        title:'tool 1',
                        onClick:()=>{console.log('yes tool 1')},
                        isActive:false
                    }],
                    [{
                        icon:'admin-settings',
                        title:'tool 2',
                        onClick:()=>{console.log('yes tool 2')},
                        isActive:false
                    }]
                ]}  
                />
                <Toolbar>
                    custom
                </Toolbar>
                <Toolbar>
                    <DropdownMenu
                        icon="arrow-down-alt"
                        label="dropDown menu"
                        controls={[
                            [{
                                icon:'admin-generic',
                                title:'dropdown 1',
                                onClick:()=>{console.log('drop down 1')},
                                isActive:false
                            }],
                            [{
                                icon:'admin-settings',
                                title:'dropdown 2',
                                onClick:()=>{console.log('drop down 2')},
                                isActive:false
                            }]
                        ]}
                    />
                </Toolbar>
            </BlockControls>
            <div class="wppgt-block-2-icon">
                <i style={{"color":iconColor,"backgroundColor":iconBgColor,'fontSize':iconFontsize+'px','textAlign':iconAlignment}} className={ attributes.iconClass }></i>
            </div>
            </>

        ]);
    },
	save: ({attributes}) => {
            // console.log( attributes );
        const { iconColor,iconBgColor,iconFontsize,iconAlignment } = attributes;
        return (
            <div class="wppgt-block-2-icon">
                <i style={{"color":iconColor,"backgroundColor":iconBgColor,'fontSize':iconFontsize+'px','textAlign':iconAlignment}} className={ attributes.iconClass }></i>
            </div>
        );
    },

} );
