const cssAnimationList = {
    cssSlideH: {
      prefixCss: 'animate__animated animate__faster',
      fwdShowCss: 'animate__slideInLeft',
      fwdHideCss: 'animate__slideOutRight',
      bckShowCss: 'animate__slideInRight',
      bckHideCss: 'animate__slideOutLeft',
    },
    cssSlideV: {
      prefixCss: 'animate__animated animate__faster',
      fwdShowCss: 'animate__slideInDown',
      fwdHideCss: 'animate__slideOutDown',
      bckShowCss: 'animate__slideInUp',
      bckHideCss: 'animate__slideOutUp',
    },
    cssFade: {
      prefixCss: 'animate__animated animate__faster',
      fwdShowCss: 'animate__fadeIn',
      fwdHideCss: 'animate__fadeOut',
      bckShowCss: 'animate__fadeIn',
      bckHideCss: 'animate__fadeOut',
    },
    cssFadeSlideH: {
      prefixCss: 'animate__animated animate__faster',
      fwdShowCss: 'animate__fadeInLeft',
      fwdHideCss: 'animate__fadeOutRight',
      bckShowCss: 'animate__fadeInRight',
      bckHideCss: 'animate__fadeOutLeft',
    },
    cssFadeSlideV: {
      prefixCss: 'animate__animated animate__faster',
      fwdShowCss: 'animate__fadeInDown',
      fwdHideCss: 'animate__fadeOutDown',
      bckShowCss: 'animate__fadeInUp',
      bckHideCss: 'animate__fadeOutUp',
    },
    cssFadeSlideCorner1: {
      prefixCss: 'animate__animated animate__faster',
      fwdShowCss: 'animate__fadeInTopLeft',
      fwdHideCss: 'animate__fadeOutBottomRight',
      bckShowCss: 'animate__fadeInBottomRight',
      bckHideCss: 'animate__fadeOutTopLeft',
    },
    cssFadeSlideCorner2: {
      prefixCss: 'animate__animated animate__faster',
      fwdShowCss: 'animate__fadeInBottomLeft',
      fwdHideCss: 'animate__fadeOutTopRight',
      bckShowCss: 'animate__fadeInTopRight',
      bckHideCss: 'animate__fadeOutBottomLeft',
    },
    cssBounce: {
      prefixCss: 'animate__animated animate__faster',
      fwdShowCss: 'animate__bounceIn',
      fwdHideCss: 'animate__bounceOut',
      bckShowCss: 'animate__bounceIn',
      bckHideCss: 'animate__bounceOut',
    },
    cssBounceSlideH: {
      prefixCss: 'animate__animated animate__faster',
      fwdShowCss: 'animate__bounceInLeft',
      fwdHideCss: 'animate__bounceOutRight',
      bckShowCss: 'animate__bounceInRight',
      bckHideCss: 'animate__bounceOutLeft',
    },
    cssBounceSlideV: {
      prefixCss: 'animate__animated animate__faster',
      fwdShowCss: 'animate__bounceInDown',
      fwdHideCss: 'animate__bounceOutDown',
      bckShowCss: 'animate__bounceInUp',
      bckHideCss: 'animate__bounceOutUp',
    },
    cssBackSlideH: {
      prefixCss: 'animate__animated animate__faster',
      fwdShowCss: 'animate__backInLeft',
      fwdHideCss: 'animate__backOutRight',
      bckShowCss: 'animate__backInRight',
      bckHideCss: 'animate__backOutLeft',
    },
    cssBackSlideV: {
      prefixCss: 'animate__animated animate__faster',
      fwdShowCss: 'animate__backInDown',
      fwdHideCss: 'animate__backOutDown',
      bckShowCss: 'animate__backInUp',
      bckHideCss: 'animate__backOutUp',
    },
    cssFlipH: {
      prefixCss: 'animate__animated animate__faster',
      fwdShowCss: 'animate__flipInY',
      fwdHideCss: 'animate__flipOutY',
      bckShowCss: 'animate__flipInY',
      bckHideCss: 'animate__flipOutY',
    },
    cssFlipV: {
      prefixCss: 'animate__animated animate__faster',
      fwdShowCss: 'animate__flipInX',
      fwdHideCss: 'animate__flipOutX',
      bckShowCss: 'animate__flipInX',
      bckHideCss: 'animate__flipOutX',
    },
    cssLightspeed: {
      prefixCss: 'animate__animated animate__faster',
      fwdShowCss: 'animate__lightSpeedInLeft',
      fwdHideCss: 'animate__lightSpeedOutRight',
      bckShowCss: 'animate__lightSpeedInRight',
      bckHideCss: 'animate__lightSpeedOutLeft',
    },
    cssRotate: {
      prefixCss: 'animate__animated animate__faster',
      fwdShowCss: 'animate__rotateIn',
      fwdHideCss: 'animate__rotateOut',
      bckShowCss: 'animate__rotateIn',
      bckHideCss: 'animate__rotateOut',
    },
    cssRotateClock: {
      prefixCss: 'animate__animated animate__faster',
      fwdShowCss: 'animate__rotateInDownLeft',
      fwdHideCss: 'animate__rotateOutDownLeft',
      bckShowCss: 'animate__rotateInUpLeft',
      bckHideCss: 'animate__rotateOutUpLeft',
    },
    cssRotateAntiClock: {
      prefixCss: 'animate__animated animate__faster',
      fwdShowCss: 'animate__rotateInDownRight',
      fwdHideCss: 'animate__rotateOutDownRight',
      bckShowCss: 'animate__rotateInUpRight',
      bckHideCss: 'animate__rotateOutUpRight',
    },
    cssZoom: {
      prefixCss: 'animate__animated animate__faster',
      fwdShowCss: 'animate__zoomIn',
      fwdHideCss: 'animate__zoomOut',
      bckShowCss: 'animate__zoomIn',
      bckHideCss: 'animate__zoomOut',
    }
}

const cssColors = [ 
  "--sw-border-color",
  "--sw-toolbar-btn-color",
  "--sw-toolbar-btn-background-color",
  "--sw-anchor-default-primary-color",
  "--sw-anchor-default-secondary-color",
  "--sw-anchor-active-primary-color",
  "--sw-anchor-active-secondary-color",
  "--sw-anchor-done-primary-color",
  "--sw-anchor-done-secondary-color",
  "--sw-anchor-disabled-primary-color",
  "--sw-anchor-disabled-secondary-color",
  "--sw-anchor-anchor-error-primary-color",
  "--sw-anchor-anchor-error-secondary-color",
  "--sw-anchor-anchor-warning-primary-color",
  "--sw-anchor-anchor-warning-secondary-color",
  "--sw-progress-color",
  "--sw-progress-background-color",
  "--sw-loader-color",
  "--sw-loader-background-color",
  "--sw-loader-background-wrapper-color"
];

const presetColors = {  
  "Blue (Default)": {
    "--sw-toolbar-btn-background-color": "#009EF7",
    "--sw-anchor-default-primary-color": "#f8f9fa",
    "--sw-anchor-default-secondary-color": "#b0b0b1",
    "--sw-anchor-active-primary-color": "#009EF7",
    "--sw-anchor-active-secondary-color": "#ffffff",
    "--sw-anchor-done-primary-color": "#90d4fa",
    "--sw-anchor-done-secondary-color": "#fefefe",
    "--sw-progress-color": "#009EF7",
    "--sw-loader-color": "#009EF7",
  },
  "Green": {
    "--sw-border-color": "#eeeeee",
    "--sw-toolbar-btn-color": "#ffffff",
    "--sw-toolbar-btn-background-color": "#008931",
    "--sw-anchor-default-primary-color": "#f8f9fa",
    "--sw-anchor-default-secondary-color": "#b0b0b1",
    "--sw-anchor-active-primary-color": "#78c043",
    "--sw-anchor-active-secondary-color": "#ffffff",
    "--sw-anchor-done-primary-color": "#588835",
    "--sw-anchor-done-secondary-color": "#c2c2c2",
    "--sw-anchor-disabled-primary-color": "#f8f9fa",
    "--sw-anchor-disabled-secondary-color": "#dbe0e5",
    "--sw-anchor-error-primary-color": "#dc3545",
    "--sw-anchor-error-secondary-color": "#ffffff",
    "--sw-anchor-warning-primary-color": "#ffc107",
    "--sw-anchor-warning-secondary-color": "#ffffff",
    "--sw-progress-color": "#78c043",
    "--sw-progress-background-color": "#f8f9fa",
    "--sw-loader-color": "#78c043",
    "--sw-loader-background-color": "#f8f9fa",
    "--sw-loader-background-wrapper-color": "rgba(255, 255, 255, 0.7)",
  },
  "Yellow": {
    "--sw-border-color": "#eeeeee",
    "--sw-toolbar-btn-color": "#ffffff",
    "--sw-toolbar-btn-background-color": "#e4a707",
    "--sw-anchor-default-primary-color": "#f8f9fa",
    "--sw-anchor-default-secondary-color": "#b0b0b1",
    "--sw-anchor-active-primary-color": "#fbbd19",
    "--sw-anchor-active-secondary-color": "#ffffff",
    "--sw-anchor-done-primary-color": "#e4a707",
    "--sw-anchor-done-secondary-color": "#dbe0e5",
    "--sw-anchor-disabled-primary-color": "#f8f9fa",
    "--sw-anchor-disabled-secondary-color": "#dbe0e5",
    "--sw-anchor-error-primary-color": "#dc3545",
    "--sw-anchor-error-secondary-color": "#ffffff",
    "--sw-anchor-warning-primary-color": "#ffc107",
    "--sw-anchor-warning-secondary-color": "#ffffff",
    "--sw-progress-color": "#fbbd19",
    "--sw-progress-background-color": "#f8f9fa",
    "--sw-loader-color": "#fbbd19",
    "--sw-loader-background-color": "#f8f9fa",
    "--sw-loader-background-wrapper-color": "rgba(255, 255, 255, 0.7)",
  },  
  "Red": {
    "--sw-border-color": "#eeeeee",
    "--sw-toolbar-btn-color": "#ffffff",
    "--sw-toolbar-btn-background-color": "#f44336",
    "--sw-anchor-default-primary-color": "#f8f9fa",
    "--sw-anchor-default-secondary-color": "#b0b0b1",
    "--sw-anchor-active-primary-color": "#f44336",
    "--sw-anchor-active-secondary-color": "#ffffff",
    "--sw-anchor-done-primary-color": "#f8877f",
    "--sw-anchor-done-secondary-color": "#fefefe",
    "--sw-anchor-disabled-primary-color": "#f8f9fa",
    "--sw-anchor-disabled-secondary-color": "#dbe0e5",
    "--sw-anchor-error-primary-color": "#dc3545",
    "--sw-anchor-error-secondary-color": "#ffffff",
    "--sw-anchor-warning-primary-color": "#ffc107",
    "--sw-anchor-warning-secondary-color": "#ffffff",
    "--sw-progress-color": "#f44336",
    "--sw-progress-background-color": "#f8f9fa",
    "--sw-loader-color": "#f44336",
    "--sw-loader-background-color": "#f8f9fa",
    "--sw-loader-background-wrapper-color": "rgba(255, 255, 255, 0.7)",
  },
  "Lite Blue": {
    "--sw-border-color": "#eeeeee",
    "--sw-toolbar-btn-color": "#ffffff",
    "--sw-toolbar-btn-background-color": "#0cb6d8",
    "--sw-anchor-default-primary-color": "#f8f9fa",
    "--sw-anchor-default-secondary-color": "#b0b0b1",
    "--sw-anchor-active-primary-color": "#00d5ff",
    "--sw-anchor-active-secondary-color": "#ffffff",
    "--sw-anchor-done-primary-color": "#0cb6d8",
    "--sw-anchor-done-secondary-color": "#dbe0e5",
    "--sw-anchor-disabled-primary-color": "#f8f9fa",
    "--sw-anchor-disabled-secondary-color": "#dbe0e5",
    "--sw-anchor-error-primary-color": "#dc3545",
    "--sw-anchor-error-secondary-color": "#ffffff",
    "--sw-anchor-warning-primary-color": "#ffc107",
    "--sw-anchor-warning-secondary-color": "#ffffff",
    "--sw-progress-color": "#0dcaf0",
    "--sw-progress-background-color": "#f8f9fa",
    "--sw-loader-color": "#0dcaf0",
    "--sw-loader-background-color": "#f8f9fa",
    "--sw-loader-background-wrapper-color": "rgba(255, 255, 255, 0.7)",
  },
  "Dark": {
    "--sw-border-color": "#eeeeee",
    "--sw-toolbar-btn-color": "#ffffff",
    "--sw-toolbar-btn-background-color": "#0a2730",
    "--sw-anchor-default-primary-color": "#757575",
    "--sw-anchor-default-secondary-color": "#b0b0b1",
    "--sw-anchor-active-primary-color": "#000000",
    "--sw-anchor-active-secondary-color": "#ffffff",
    "--sw-anchor-done-primary-color": "#333333",
    "--sw-anchor-done-secondary-color": "#aaaaaa",
    "--sw-anchor-disabled-primary-color": "#f8f9fa",
    "--sw-anchor-disabled-secondary-color": "#dbe0e5",
    "--sw-anchor-error-primary-color": "#dc3545",
    "--sw-anchor-error-secondary-color": "#ffffff",
    "--sw-anchor-warning-primary-color": "#ffc107",
    "--sw-anchor-warning-secondary-color": "#ffffff",
    "--sw-progress-color": "#0a2730",
    "--sw-progress-background-color": "#f8f9fa",
    "--sw-loader-color": "#0a2730",
    "--sw-loader-background-color": "#f8f9fa",
    "--sw-loader-background-wrapper-color": "rgba(255, 255, 255, 0.7)",
  }
}

function loadColorList() {
  $.each(presetColors, function(key, objColors) {
      $('#theme_colors').append($('<option/>', {
          value: key,
          text : key,
          'data-colors': window.btoa(JSON.stringify(objColors))
      }));
  });
}

function applyColors(colorObj) {
   colorObj = JSON.parse(window.atob(colorObj));
  $.each(colorObj, function(key, val) {
      document.documentElement.style.setProperty(key, val);
  });

  displayColors();
}

$(function() {
    // Load color list
    loadColorList();
    
    // Step show event
    $("#smartwizard").on("showStep", function(e, anchorObject, stepIndex, stepDirection, stepPosition) {
      $("#prev-btn").removeClass('disabled').prop('disabled', false);
      $("#next-btn").removeClass('disabled').prop('disabled', false);
      if(stepPosition === 'first') {
          $("#prev-btn").addClass('disabled').prop('disabled', true);
      } else if(stepPosition === 'last') {
          $("#next-btn").addClass('disabled').prop('disabled', true);
      } else {
          $("#prev-btn").removeClass('disabled').prop('disabled', false);
          $("#next-btn").removeClass('disabled').prop('disabled', false);
      }

      // Get step info from Smart Wizard
      let stepInfo = $('#smartwizard').smartWizard("getStepInfo");
      $("#sw-current-step").text(stepInfo.currentStep + 1);
      $("#sw-total-step").text(stepInfo.totalSteps);
    });

    // Smart Wizard
    $('#smartwizard').smartWizard({
      selected: 0,
      theme: 'dots', // basic, arrows, square, round, dots
      enableUrlHash: false,
      transition: {
        animation: 'fade' // none|fade|slideHorizontal|slideVertical|slideSwing|css
      },
      toolbar: {
        position: 'bottom', // none/ top/ both bottom
        // extraHtml: `<button class="btn btn-success sw-btn " onclick="onFinish()">Finish</button>
        //             <button class="btn btn-secondary sw-btn" onclick="onCancel()">Cancel</button>`
      }
    });


    $("#animation").on("change", function() {
        const anim = $(this).val();
        const cssAnim = cssAnimationList[anim];
        var options = {};

        if (cssAnim != undefined) {
          options = {
            transition: {
                animation: 'css',
                ...cssAnim
            },
          };
        } else {
          options = {
            transition: {
                animation: anim
            },
          };
        }

        $('#smartwizard').smartWizard("setOptions", options);
        return true;
    });

    $("#theme_selector").on("change", function() {
        // Change theme
        var options = {
          theme: $(this).val()
        };
        $('#smartwizard').smartWizard("setOptions", options);
        return true;
    });

    $("#theme_colors").on("change", function() {
        applyColors($('#theme_colors option:selected').data('colors'));
        return true;
    });

});