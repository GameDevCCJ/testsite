class PortfolioProgram extends Program {
    createWindow() {
        let wminfo = {
            name: 'Portfolio - Work',
            title: 'Portfolio - Work',
            icon:  'img/desktop/MyDocuments.png',
            y: 40,
            x: isMobileBrowser() ? 20 : 120
        }

        let body = `
            <div class="typography">
                <h2> James4 </h2>
                <subtitle> About James4</subtitle>
                
                <hr class="hr--accent2"/>

                <p>
                    <i> Note that some works here may be proprietary, so limited information may be released.</i>
                <p>

             

                <br/>
                <b> OMEGA SITE </b> (<a href="https://sites.google.com/ccpsnet.net/kmhhjtftd6r86r5e66uvy8v976v5f6/home" target="_blank">web</a>)
                <ul>
                    
        return [wminfo, body]
    }



window.pm.registerPrototype('portfolio', PortfolioProgram)
