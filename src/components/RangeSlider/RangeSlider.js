import { useEffect } from "react";
import $ from "jquery"; // Ensure jQuery is properly included
import "./style.css";

const RangeSlider = () => {
  useEffect(() => {
    const DEBUG = false; // make true to enable debug output
    const PLUGIN_IDENTIFIER = "RangeSlider";

    const defaults = {
      output: {
        prefix: "",
        suffix: "",
        format: function (output) {
          return output;
        },
      },
      change: function (event, obj) {},
    };

    class RangeSlider {
      constructor(element, options) {
        this.element = element;
        this.options = options || {};
        this.defaults = defaults;
        this.metadata = $(this.element).data("options");
      }

      init() {
        if (DEBUG && console) console.log("RangeSlider init");
        this.config = $.extend(
          true,
          {},
          this.defaults,
          this.options,
          this.metadata
        );

        const self = this;
        // Add the markup for the slider track
        this.trackFull = $('<div class="track track--full"></div>').appendTo(
          self.element
        );
        this.trackIncluded = $(
          '<div class="track track--included"></div>'
        ).appendTo(self.element);
        this.inputs = [];

        $('input[type="range"]', this.element).each(function (index, value) {
          const rangeInput = this;
          rangeInput.output = $("<output>").appendTo(self.element);
          rangeInput.output.zindex =
            parseInt($(rangeInput.output).css("z-index")) || 1;
          rangeInput.thumb = $('<div class="slider-thumb">').prependTo(
            self.element
          );
          rangeInput.initialValue = $(this).val();

          rangeInput.update = function () {
            // Function remains the same as provided
          };

          // Other methods remain the same as provided...

          self.inputs.push(this);
        });

        this.reset();
        return this;
      }

      // Other methods remain the same...
    }

    RangeSlider.defaults = RangeSlider.prototype.defaults;

    $.fn.RangeSlider = function (options) {
      if (DEBUG && console) console.log("$.fn.RangeSlider", options);
      return this.each(function () {
        let instance = $(this).data(PLUGIN_IDENTIFIER);
        if (!instance) {
          instance = new RangeSlider(this, options).init();
          $(this).data(PLUGIN_IDENTIFIER, instance);
        }
      });
    };

    const rangeSlider = $("#facet-price-range-slider");
    if (rangeSlider.length > 0) {
      rangeSlider.RangeSlider({
        output: {
          format: function (output) {
            return output.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
          },
          suffix: function (input) {
            return parseInt($(input).val()) === parseInt($(input).attr("max"))
              ? this.config.maxSymbol
              : "";
          },
        },
      });
    }
  }, []);

  return (
    <div id='facet-price-range-slider'>
      <input
        name='range-1'
        value='0'
        min='0'
        max='1250'
        step='1'
        type='range'
      />
      <input
        name='range-2'
        value='1250'
        min='0'
        max='1250'
        step='1'
        type='range'
      />
    </div>
  );
};

export default RangeSlider;
