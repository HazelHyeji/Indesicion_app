"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VisibililtyToggle = function (_React$Component) {
    _inherits(VisibililtyToggle, _React$Component);

    function VisibililtyToggle(props) {
        _classCallCheck(this, VisibililtyToggle);

        var _this = _possibleConstructorReturn(this, (VisibililtyToggle.__proto__ || Object.getPrototypeOf(VisibililtyToggle)).call(this, props));

        _this.handleToggleVisible = _this.handleToggleVisible.bind(_this);
        _this.state = {
            visibililty: false
        };
        return _this;
    }

    _createClass(VisibililtyToggle, [{
        key: "handleToggleVisible",
        value: function handleToggleVisible() {
            this.setState(function (prevState) {
                return {
                    visibililty: !prevState.visibililty
                };
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    null,
                    "Visible Toggle"
                ),
                React.createElement(
                    "button",
                    { onClick: this.handleToggleVisible },
                    this.state.visibililty ? "Show detail" : "Hide detail"
                ),
                this.state.visibililty && React.createElement(
                    "p",
                    null,
                    "Heya! here is something."
                )
            );
        }
    }]);

    return VisibililtyToggle;
}(React.Component);

ReactDOM.render(React.createElement(VisibililtyToggle, null), document.getElementById("app"));

// let visibililty = false;

// const toggleVisible = () => {
//     visibililty = !visibililty;
//     render();
// };

// const render = () => {
//     const jsx = (

//     );

// }

// render();
