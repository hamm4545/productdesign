/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
 const path = require(`path`)

module.exports = {
  /* Your site config here */
   siteMetadata: {
    title: `About - Heather Song`,
    description: ``,
    author: `Heather Song`,
  },
  plugins: [
	  	{resolve: 'gatsby-plugin-sass'},
	  	{
	      resolve: `gatsby-plugin-typography`,
	      options: {
	        pathToConfigModule: `src/utils/typography`,
	      },
	    },
	    {
	    	resolve: `gatsby-plugin-styled-components`,
	    	options:{
	    		displayName: false,
	    		minify: false,
	    		fileName: false
	    	}
	    },
		 {
		    resolve: `gatsby-source-filesystem`,
		    options: {
		      name: `images`,
		      path: path.join(__dirname, `src`, `images`)
		    }
		  },
	    `gatsby-plugin-sharp`,
	    `gatsby-transformer-sharp`,
	    `gatsby-plugin-react-helmet`,
	    {
	      resolve: 'gatsby-plugin-gdpr-tracking',
	      options: {
	        // logging to the console, if debug is true
	        debug: false, 
	        googleAnalytics: { 
	            // The property ID; the tracking code won't be generated without it.
	            trackingId: 'YOUR_GOOGLE_ANALYTICS_TRACKING_ID',
	            // Defines it google analytics should be started with out the cookie consent
	            autoStart: true, // <--- default
	            // Setting this parameter is optional
	            anonymize: true, // <--- default
	            // Name of the cookie, that enables the tracking if it is true
	            controlCookieName: 'gdpr-analytics-enabled', // <--- default
	            cookieFlags: 'secure;samesite=none' // <--- default
	        },
	        hotjar: {
	          // The Hotjar ID; the tracking code won't be generated without it.
	          trackingId: '747883',
	          // Your Hotjar snippet version
	          snippetVersion: '6', // <--- default
	          // Name of the cookie, that enables the tracking if it is true
	          controlCookieName: 'gdpr-analytics-enabled' // <--- default
	        },
	        // Defines the environments where the tracking should be available  - default is ["production"]
	        environments: ['production', 'development']
	      },
	    },
  	]

}
