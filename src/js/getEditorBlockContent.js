/**
 * Import internal dependencies
 */
import getMapHTML from './getMapHTML.js'

/**
 * Get WordPress libraries from the wp global
 */
const { __ } = wp.i18n;

export default function getEditorBlockContent( attributes, className, pantheonGoogleMapBlockOptions ){

    const {APIkey, location} = attributes;

    if( APIkey === '' || ! APIkey.length ){
        return (
            <div className={`${className} error`} style={{padding: '1em'}}>
                <p style={{textAlign: 'center'}}>
                    {__( 'A Google Maps API key is required.')  }&nbsp;
                    <a href={pantheonGoogleMapBlockOptions.settings_url}>
                    {__( 'View plugin settings to add an API key.')  }
                    </a>
                </p>
            </div>
        )
    }
    
    if( location === '' || ! location.length ){
        return (
            <div className={`${className} error`} style={{padding: '1em'}}>
                <p style={{textAlign: 'center'}}>
                    {__( 'A location is required. Please enter one in the field above.')  }
                </p>
            </div>
        )
    }

    return (
        <div className={className} style={{padding: '1em'}}>
            {getMapHTML( attributes )}
        </div>
    )

}