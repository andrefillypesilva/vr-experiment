require('aframe');
require('aframe-event-set-component');
require('aframe-look-at-component');

AFRAME.registerComponent('start-configurations', {
    init: function () {
        document.getElementById('btn_details').addEventListener('click', () => {
            document.getElementById('label_details').setAttribute('visible', true);
        });
        
        document.getElementById('btn_cabin').addEventListener('click', () => {
            document.getElementById('label_cabin').setAttribute('visible', true);
        });
        
        document.getElementById('btn_seat').addEventListener('click', () => {
            document.getElementById('label_seat').setAttribute('visible', true);
        });
            
        document.getElementById('btn_details').addEventListener('mouseleave', () => {
            setTimeout(() => {
            document.getElementById('label_details').setAttribute('visible', false);
            }, 3000);
        });
        
        document.getElementById('btn_cabin').addEventListener('mouseleave', () => {
            setTimeout(() => {
            document.getElementById('label_cabin').setAttribute('visible', false);
            }, 3000);
        });
        
        document.getElementById('btn_seat').addEventListener('mouseleave', () => {
            setTimeout(() => {
            document.getElementById('label_seat').setAttribute('visible', false);
            }, 3000);
        });
    }
});
