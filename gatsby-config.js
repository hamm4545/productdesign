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
	    `gatsby-transformer-sharp`
  	]

}
