Vue.component('template1-button', {
    template: `
    <div class="container-login100-form-btn">
        <button class="login100-form-btn" @click="generatepdf">
            Generate Template 1
        </button>
    </div>
    `,
    props:['data'],
    methods : {
        generatepdf : function(){
            console.log('clicked')


            var doc = new jsPDF('l', 'mm', [90,54]);

            doc.addImage(imgData, 'JPEG', 0, 0, 90, 54);
            
            var name = this.data.name
            var profession = this.data.profession
            var company = this.data.company
            var email = this.data.email
            var phone = this.data.phone
            var social = this.data.socialMedia

            
            doc.setFont("courier");
            doc.setFontSize(16);
            doc.text(22, 20, name);
            
            doc.setFontSize(8);
            doc.setFontType("italic");
            doc.text(27, 27, profession);

            doc.setFontType("normal");
            doc.setFontSize(10);
            doc.text(35, 35, company);
            doc.setLineWidth(0.5);
            doc.line(15, 38, 80, 38);
            

            var imgSocial  = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAbwAAAG8B8aLcQwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEISURBVDiNpdM9SkNREAXgb8QihW7AJr0QUtilsbExYOtaAtZC1pDOSrCxCKSycQkSsAykSDZgLWPhPAnhhURyYbjDmTnnMj9XZspMGOAVK+QOW1XOoOFFZoqIER6xxBvW2s8FbtDFQ2aOm5e/8YROo7zL0Knc7+J6xeJA8hlGJbIorhUmW4ldPFcp6/K7jUjdE6xOq66/miOiiw+cY1bwPW4jop+Zy8LWuDhpadS4yL3MvMvMO/QKG28ntwlcY5aZnw1Q/qxiewX+ddoE3jGMiMsGKH9Ysb0CI3xhHhHTiJhiXtioTWDtdxKgutzHC67KXrA5ATamd/AibW3j3yIdtcrHf6Zjv/MPpd/4nwJh9g0AAAAASUVORK5CYII='
            var imgPhone = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAeAAAAHgB6vJq9gAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAFPSURBVDiNfdKxSlxREMbxn9ltJE0UQRBiiETYVUGwsIwW2SJFsDHEypQpTCIkiLilNmItKMkb+ArZJiZNIKzGIpBiVxB8jrVwNgx3rxaXc+bMd/7znbmj1+vpfxjKcZyt4Qw7mBzIh2gRv3GBRglkGk108LaQM4suFjCFf3iVBJW0H8c3HGbACV6mg2dRqR7xFlpYjPhBQNb7gCtUC7Y+oZni5/iO4+Skg8eCVk/i+XjS05Je/ExOmuHOPj4mURsvipcjt4xWauyvvp0uxiJxgL0yQKpc+f+LY7OJr7F/iL94cxekbA6q+JPeN4FzvE+VZ7CLmQFACJbi0qOIR6Jp+1jBJTZibQwA4tKHmMjRiIdxFO5qcVaLni0NAELwzu3sP7mnkbNolwJCsBpVPkujXHjujzsBqQdfwv4W6qjgdcDn7gUkUA3bOMU1DvOU3gB87rBw8/gS9QAAAABJRU5ErkJggg=='
            var imgEmail = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAdQAAAHUB48IHZQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEQSURBVDiNpdNPK8RRFMbxzxmDQrGRYu0V2MsLkD/vQFnaI2Ul9pTXICsbiVBWZCPN2sZuypoSOjb3p2maNNOcunW7p+dbz3PuiczUT9UhIgYw2aP2LTN/Ass4wFePgEHsQAMzmMtM3RzMFU0DmuXxAVtdiLfxUO7NVsAIznGIWgdhDUe4wGgFqFWGMvMDKxjDSUQMV71yP8U4ljLzver9AQrkOzPX8YLLiJiIiHFc4RVrmfndqqm3R1tGOl1SvkPgDbMYwme7ptnicxhnOC7CRayW3h5uKv+dQhzDLfb/mcAW7jHRCfCIzS7GuIEnDFSARvG80MNHmscUnuvYxTW+IqI9n/9qEDuRmf0tU7/r/AuVcPxrqR5ZhgAAAABJRU5ErkJggg=='
            
            doc.addImage(imgEmail, 'PNG', 16, 40.5, 3, 3);
            doc.setFontSize(8);
            doc.text(20, 43, email);

            doc.addImage(imgPhone, 'PNG', 54, 40, 3, 3);
            doc.setFontSize(8);
            doc.text(58, 43, phone)

            doc.addImage(imgSocial, 'PNG', 36, 45.5, 3, 3);
            doc.setFontSize(8);
            doc.text(40, 48, social)

            doc.save('test.pdf');
            // res.send(doc.output());
        },
    }
})