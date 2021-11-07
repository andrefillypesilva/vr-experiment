require('aframe');
require('aframe-event-set-component');
require('aframe-look-at-component');

AFRAME.registerComponent('mb-btn', {
    schema: {
        name: {
            type: 'string',
            default: '',
        },
        position: {
            type: 'string',
            default: '0 0 0',
        },
        radius: {
            type: 'number',
            default: .15,
        },
        lookAt: {
            type: 'string',
            default: '#camera',
        },
        class: {
            type: 'string',
            default: 'clickable',
        },
        animation: {
            type: 'string',
            default: `property: scale; loop: true;
                from: .9 .9 .9; to: 1.1 1.1 1.1;
                dir: alternate; dur: 2000;`,
        }
    },
    init: function () {
        this.el.setAttribute('id', `btn_${this.data.name}`);
        this.el.setAttribute('position', this.data.position);
        this.el.setAttribute('radius', this.data.radius);
        this.el.setAttribute('look-at', this.data.lookAt);
        this.el.setAttribute('class', this.data.class);
        this.el.setAttribute('animation__shining', this.data.animation);

        this.el.addEventListener('mouseenter', () => {
            document.getElementById('cursor').setAttribute('color', '#dc3545');
        });

        this.el.addEventListener('mouseleave', () => {
            document.getElementById('cursor').setAttribute('color', '#fff');
        });

        document.getElementById(`btn_${this.data.name}`).addEventListener('click', () => {
            document.getElementById(`label_${this.data.name}`).setAttribute('visible', true);
        });

        document.getElementById(`btn_${this.data.name}`).addEventListener('mouseleave', () => {
            setTimeout(() => {
                document.getElementById(`label_${this.data.name}`).setAttribute('visible', false);
            }, 3000);
        });
    }
});

AFRAME.registerComponent('mb-label-group', {
    schema: {
        name: {
            type: 'string',
            default: '',
        },
        position: {
            type: 'string',
            default: '0 0 0',
        },
        visible: {
            type: 'boolean',
            default: false,
        },
    },
    init: function() {
        this.el.setAttribute('id', `label_${this.data.name}`);
        this.el.setAttribute('position', this.data.position);
        this.el.setAttribute('visible', this.data.visible);
    }
});

AFRAME.registerComponent('mb-label', {
    schema: {
        value: {
            type: 'string',
            default: '',
        },
        lookAt: {
            type: 'string',
            default: '#camera',
        },
        position: {
            type: 'string',
            default: '0 0 0',
        },
        align: {
            type: 'string',
            default: 'left',
        },
    },
    init: function() {
        this.el.setAttribute('value', this.data.value);
        this.el.setAttribute('position', this.data.position);
        this.el.setAttribute('look-at', this.data.lookAt);
        this.el.setAttribute('align', this.data.align);
    }
});
