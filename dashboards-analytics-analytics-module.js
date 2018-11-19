(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboards-analytics-analytics-module"],{

/***/ "./src/app/main/apps/dashboards/analytics/analytics.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/main/apps/dashboards/analytics/analytics.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"dashboard-analytics\" class=\"page-layout blank\">\r\n\r\n    <div class=\"main-widget\">\r\n\r\n        <div class=\"position-relative p-24 blue-600\"\r\n             fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n            <div fxLayout=\"column\" fxLayoutAlign=\"start start\">\r\n                <span class=\"h2\">Visitors</span>\r\n                <span class=\"h5 secondary-text\">Unique visitors by month</span>\r\n            </div>\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                <div class=\"py-8 px-12 border-radius-2 line-height-1 mr-8 cursor-pointer\"\r\n                     (click)=\"widget1SelectedYear = '2015'\"\r\n                     [ngClass]=\"{'blue-700': widget1SelectedYear === '2015'}\">\r\n                    2015\r\n                </div>\r\n                <div class=\"py-8 px-12 border-radius-2 line-height-1 mr-8 cursor-pointer\"\r\n                     (click)=\"widget1SelectedYear = '2016'\"\r\n                     [ngClass]=\"{'blue-700': widget1SelectedYear === '2016'}\">\r\n                    2016\r\n                </div>\r\n                <div class=\"py-8 px-12 border-radius-2 line-height-1 cursor-pointer\"\r\n                     (click)=\"widget1SelectedYear = '2017'\"\r\n                     [ngClass]=\"{'blue-700': widget1SelectedYear === '2017'}\">\r\n                    2017\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"position-relative h-256 pb-16 blue-600\">\r\n            <canvas baseChart\r\n                    [datasets]=\"widgets.widget1.datasets[widget1SelectedYear]\"\r\n                    [labels]=\"widgets.widget1.labels\"\r\n                    [colors]=\"widgets.widget1.colors\"\r\n                    [options]=\"widgets.widget1.options\"\r\n                    [chartType]=\"widgets.widget1.chartType\">\r\n            </canvas>\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"content\">\r\n\r\n        <div class=\"left mr-lg-32\">\r\n\r\n            <div class=\"pb-24 font-size-18 font-weight-300\">\r\n                How are your active users trending over time?\r\n            </div>\r\n\r\n            <div fxLayout=\"column\" fxLayoutAlign=\"start\"\r\n                 fxLayout.gt-sm=\"row\" fxLayoutAlign.gt-sm=\"start start\">\r\n\r\n                <!-- Widget 2 -->\r\n                <div class=\"widget\" fxFlex=\"100\" fxFlex.gt-sm=\"33\">\r\n\r\n                    <div class=\"fuse-card auto-width mb-32\" [ngClass.gt-sm]=\"'mb-0 mr-32'\">\r\n\r\n                        <div class=\"p-16 pb-0\" fxLayout=\"row wrap\" fxLayoutAlign=\"start end\">\r\n\r\n                            <div class=\"pr-16\">\r\n                                <div class=\"h3 secondary-text\">Conversion</div>\r\n                                <div class=\"font-size-54 font-weight-300 line-height-1 mt-8\">\r\n                                    {{widgets.widget2.conversion.value}}\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"py-4 font-size-16\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                <div fxFlex=\"row\" fxLayoutAlign=\"start center\" class=\"green-fg\"\r\n                                     *ngIf=\"widgets.widget2.conversion.ofTarget > 0\">\r\n                                    <mat-icon class=\"green-fg mr-4\">trending_up</mat-icon>\r\n                                    <span>{{widgets.widget2.conversion.ofTarget}}%</span>\r\n                                </div>\r\n                                <div fxFlex=\"row\" fxLayoutAlign=\"start center\" class=\"red-fg\"\r\n                                     *ngIf=\"widgets.widget2.conversion.ofTarget < 0\">\r\n                                    <mat-icon class=\"red-fg mr-4\">trending_down</mat-icon>\r\n                                    <span>{{widgets.widget2.conversion.ofTarget}}%</span>\r\n                                </div>\r\n                                <div class=\"ml-4 text-nowrap\">of target</div>\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n                        <div class=\"h-96 w-100-p\">\r\n                            <canvas baseChart\r\n                                    [datasets]=\"widgets.widget2.datasets\"\r\n                                    [labels]=\"widgets.widget2.labels\"\r\n                                    [colors]=\"widgets.widget2.colors\"\r\n                                    [options]=\"widgets.widget2.options\"\r\n                                    [chartType]=\"widgets.widget2.chartType\">\r\n                            </canvas>\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n                <!-- / Widget 2 -->\r\n\r\n                <!-- Widget 3 -->\r\n                <div class=\"widget\" fxFlex=\"100\" fxFlex.gt-sm=\"34\">\r\n\r\n                    <div class=\"fuse-card auto-width mb-32\" [ngClass.gt-sm]=\"'mb-0 mr-32'\">\r\n\r\n                        <div class=\"p-16 pb-0\" fxLayout=\"row wrap\" fxLayoutAlign=\"start end\">\r\n\r\n                            <div class=\"pr-16\">\r\n                                <div class=\"h3 secondary-text\">Impressions</div>\r\n                                <div class=\"font-size-54 font-weight-300 line-height-1 mt-8\">\r\n                                    {{widgets.widget3.impressions.value}}\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"py-4 font-size-16\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                <div fxFlex=\"row\" fxLayoutAlign=\"start center\" class=\"green-fg\"\r\n                                     *ngIf=\"widgets.widget3.impressions.ofTarget > 0\">\r\n                                    <mat-icon class=\"green-fg mr-4\">trending_up</mat-icon>\r\n                                    <span>{{widgets.widget3.impressions.ofTarget}}%</span>\r\n                                </div>\r\n                                <div fxFlex=\"row\" fxLayoutAlign=\"start center\" class=\"red-fg\"\r\n                                     *ngIf=\"widgets.widget3.impressions.ofTarget < 0\">\r\n                                    <mat-icon class=\"red-fg mr-4\">trending_down</mat-icon>\r\n                                    <span>{{widgets.widget3.impressions.ofTarget}}%</span>\r\n                                </div>\r\n                                <div class=\"ml-4 text-nowrap\">of target</div>\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n                        <div class=\"h-96 w-100-p\">\r\n                            <canvas baseChart\r\n                                    [datasets]=\"widgets.widget3.datasets\"\r\n                                    [labels]=\"widgets.widget3.labels\"\r\n                                    [colors]=\"widgets.widget3.colors\"\r\n                                    [options]=\"widgets.widget3.options\"\r\n                                    [chartType]=\"widgets.widget3.chartType\">\r\n                            </canvas>\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n                <!-- / Widget 3 -->\r\n\r\n                <!-- Widget 4 -->\r\n                <div class=\"widget\" fxFlex=\"100\" fxFlex.gt-sm=\"33\">\r\n\r\n                    <div class=\"fuse-card auto-width\">\r\n\r\n                        <div class=\"p-16 pb-0\" fxLayout=\"row wrap\" fxLayoutAlign=\"start end\">\r\n\r\n                            <div class=\"pr-16\">\r\n                                <div class=\"h3 secondary-text\">Visits</div>\r\n                                <div class=\"font-size-54 font-weight-300 line-height-1 mt-8\">\r\n                                    {{widgets.widget4.visits.value}}\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"py-4 font-size-16\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                <div fxFlex=\"row\" fxLayoutAlign=\"start center\" class=\"green-fg\"\r\n                                     *ngIf=\"widgets.widget4.visits.ofTarget > 0\">\r\n                                    <mat-icon class=\"green-fg mr-4\">trending_up</mat-icon>\r\n                                    <span>{{widgets.widget4.visits.ofTarget}}%</span>\r\n                                </div>\r\n                                <div fxFlex=\"row\" fxLayoutAlign=\"start center\" class=\"red-fg\"\r\n                                     *ngIf=\"widgets.widget4.visits.ofTarget < 0\">\r\n                                    <mat-icon class=\"red-fg mr-4\">trending_down</mat-icon>\r\n                                    <span>{{widgets.widget4.visits.ofTarget}}%</span>\r\n                                </div>\r\n                                <div class=\"ml-4 text-nowrap\">of target</div>\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n                        <div class=\"h-96 w-100-p\">\r\n                            <canvas baseChart\r\n                                    [datasets]=\"widgets.widget4.datasets\"\r\n                                    [labels]=\"widgets.widget4.labels\"\r\n                                    [colors]=\"widgets.widget4.colors\"\r\n                                    [options]=\"widgets.widget4.options\"\r\n                                    [chartType]=\"widgets.widget4.chartType\">\r\n                            </canvas>\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n                <!-- / Widget 4 -->\r\n\r\n            </div>\r\n\r\n            <!-- Widget 5 -->\r\n            <div class=\"pt-48 pb-24 font-size-18 font-weight-300\">\r\n                How many pages your users visit?\r\n            </div>\r\n\r\n            <div class=\"fuse-card auto-width\">\r\n\r\n                <div class=\"position-relative p-24\"\r\n                     fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                    <div fxLayout=\"column\" fxLayoutAlign=\"start start\">\r\n                        <span class=\"h2\">Visitors & Page views</span>\r\n                    </div>\r\n                    <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                        <div class=\"py-8 px-12 border-radius-2 line-height-1 mr-8 cursor-pointer\"\r\n                             (click)=\"widget5SelectedDay = 'yesterday'\"\r\n                             [ngClass]=\"{'accent': widget5SelectedDay === 'yesterday'}\">\r\n                            Yesterday\r\n                        </div>\r\n                        <div class=\"py-8 px-12 border-radius-2 line-height-1 mr-8 cursor-pointer\"\r\n                             (click)=\"widget5SelectedDay = 'today'\"\r\n                             [ngClass]=\"{'accent': widget5SelectedDay === 'today'}\">\r\n                            Today\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"position-relative h-368 pb-16\">\r\n                    <canvas baseChart\r\n                            [datasets]=\"widgets.widget5.datasets[widget5SelectedDay]\"\r\n                            [labels]=\"widgets.widget5.labels\"\r\n                            [colors]=\"widgets.widget5.colors\"\r\n                            [options]=\"widgets.widget5.options\"\r\n                            [chartType]=\"widgets.widget5.chartType\">\r\n                    </canvas>\r\n                </div>\r\n\r\n            </div>\r\n            <!-- / Widget 5 -->\r\n\r\n            <!-- Widget 6 -->\r\n            <div class=\"pt-48 pb-24 font-size-18 font-weight-300\">\r\n                Where are your users?\r\n            </div>\r\n\r\n            <div class=\"fuse-card auto-width p-16\">\r\n\r\n                <agm-map class=\"h-640 w-100-p\"\r\n                         [minZoom]=\"2\"\r\n                         [maxZoom]=\"2\"\r\n                         [fullscreenControl]=\"false\"\r\n                         [rotateControl]=\"false\"\r\n                         [zoomControl]=\"false\"\r\n                         [scaleControl]=\"false\"\r\n                         [streetViewControl]=\"false\"\r\n                         [scrollwheel]=\"false\"\r\n                         [styles]=\"widgets.widget6.styles\">\r\n                    <agm-marker\r\n                        *ngFor=\"let marker of widgets.widget6.markers\"\r\n                        [latitude]=\"marker.lat\"\r\n                        [longitude]=\"marker.lng\">\r\n\r\n                        <agm-info-window>\r\n                            <strong>{{marker.label}}</strong>\r\n                        </agm-info-window>\r\n\r\n                    </agm-marker>\r\n                </agm-map>\r\n\r\n            </div>\r\n            <!-- / Widget 6 -->\r\n\r\n        </div>\r\n\r\n        <div class=\"right\">\r\n\r\n            <div fxLayout=\"row wrap\" fxLayout.gt-md=\"column\">\r\n\r\n                <!-- Widget 7 -->\r\n                <div class=\"mb-48\" [ngClass.lt-lg]=\"'mr-32'\" [ngClass.xs]=\"'mr-0'\">\r\n\r\n                    <div class=\"pb-24 font-size-18 font-weight-300\">\r\n                        What are your top devices?\r\n                    </div>\r\n\r\n                    <div class=\"fuse-card\">\r\n\r\n                        <div class=\"p-16\">\r\n                            <div class=\"h1 font-weight-300\">Sessions by device</div>\r\n                        </div>\r\n\r\n                        <div class=\"h-200\">\r\n                            <ngx-charts-pie-chart\r\n                                *fuseIfOnDom\r\n                                [scheme]=\"widgets.widget7.scheme\"\r\n                                [results]=\"widgets.widget7.devices\"\r\n                                [doughnut]=\"true\">\r\n                            </ngx-charts-pie-chart>\r\n                        </div>\r\n\r\n                        <div class=\"p-16\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n\r\n                            <div class=\"px-16\" fxLayout=\"column\" fxLayoutAlign=\"start center\"\r\n                                 *ngFor=\"let device of widgets.widget7.devices\">\r\n\r\n                                <div class=\"h4 secondary-text\">{{device.name}}</div>\r\n                                <div class=\"h2 font-weight-300 py-8\">{{device.value}}%</div>\r\n\r\n                                <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                                    <mat-icon class=\"s-18 pr-4 red-fg\"\r\n                                              *ngIf=\"device.change < 0\">\r\n                                        arrow_downward\r\n                                    </mat-icon>\r\n\r\n                                    <mat-icon class=\"s-18 pr-4 green-fg\"\r\n                                              *ngIf=\"device.change > 0\">\r\n                                        arrow_upward\r\n                                    </mat-icon>\r\n\r\n                                    <div class=\"h5 red-fg\"\r\n                                         [ngClass]=\"{'red-fg': device.change < 0, 'green-fg': device.change > 0}\">\r\n                                        {{device.change}}%\r\n                                    </div>\r\n                                </div>\r\n\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n                        <div class=\"card-divider mb-0\"></div>\r\n\r\n                        <div class=\"px-16\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                            <mat-form-field>\r\n                                <mat-select class=\"simplified\" value=\"7days\">\r\n                                    <mat-option value=\"today\">Today</mat-option>\r\n                                    <mat-option value=\"yesterday\">Yesterday</mat-option>\r\n                                    <mat-option value=\"7days\">Last 7 days</mat-option>\r\n                                    <mat-option value=\"28days\">Last 28 days</mat-option>\r\n                                    <mat-option value=\"90days\">Last 90 days</mat-option>\r\n                                </mat-select>\r\n                            </mat-form-field>\r\n\r\n                            <button mat-button color=\"accent\">OVERVIEW</button>\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n                <!-- / Widget 7 -->\r\n\r\n                <!-- Widget 8 -->\r\n                <div class=\"mb-48\" [ngClass.lt-lg]=\"'mr-32'\" [ngClass.xs]=\"'mr-0'\">\r\n\r\n                    <div class=\"pb-24 font-size-18 font-weight-300\">\r\n                        How are your sales?\r\n                    </div>\r\n\r\n                    <div class=\"fuse-card\">\r\n\r\n                        <div class=\"light-blue-600\">\r\n\r\n                            <div class=\"p-16\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                                <div class=\"pr-16\">\r\n                                    <div class=\"h1 font-weight-300\">Sales</div>\r\n                                    <div class=\"h5 secondary-text\">Lifetime sum of your sales</div>\r\n                                </div>\r\n\r\n                                <div>\r\n                                    <button mat-icon-button [matMenuTriggerFor]=\"card19Menu\" aria-label=\"more\">\r\n                                        <mat-icon>more_vert</mat-icon>\r\n                                    </button>\r\n\r\n                                    <mat-menu #card19Menu=\"matMenu\">\r\n                                        <button mat-menu-item>\r\n                                            <mat-icon>trending_up</mat-icon>\r\n                                            <span>Trend</span>\r\n                                        </button>\r\n                                        <button mat-menu-item>\r\n                                            <mat-icon>history</mat-icon>\r\n                                            <span>History</span>\r\n                                        </button>\r\n                                        <button mat-menu-item>\r\n                                            <mat-icon>notifications_off</mat-icon>\r\n                                            <span>Disable alerts</span>\r\n                                        </button>\r\n                                    </mat-menu>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"p-16 pt-8\" fxLayout=\"row\" fxLayoutAlign=\"space-between end\">\r\n                                <div class=\"font-size-48 font-weight-300 line-height-1\">{{widgets.widget8.today}}</div>\r\n                                <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                    <mat-icon *ngIf=\"widgets.widget8.change.value > 0\">trending_up</mat-icon>\r\n                                    <mat-icon *ngIf=\"widgets.widget8.change.value < 0\">trending_down</mat-icon>\r\n                                    <div class=\"ml-8\">{{widgets.widget8.change.value}}\r\n                                        ({{widgets.widget8.change.percentage}}%)\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n                        <mat-tab-group backgroundColor=\"accent\">\r\n                            <mat-tab label=\"1DAY\">\r\n                                <div class=\"h-200 my-16\">\r\n                                    <ngx-charts-line-chart\r\n                                        *fuseIfOnDom\r\n                                        [scheme]=\"widgets.widget8.scheme\"\r\n                                        [results]=\"widgets.widget8.data\"\r\n                                        [xAxis]=\"false\"\r\n                                        [yAxis]=\"true\"\r\n                                        [yScaleMin]=\"widgets.widget8.dataMin\"\r\n                                        [yScaleMax]=\"widgets.widget8.dataMax\">\r\n                                    </ngx-charts-line-chart>\r\n                                </div>\r\n                            </mat-tab>\r\n\r\n                            <mat-tab label=\"1WEEK\">\r\n                                <div class=\"h-200 my-16\">\r\n                                    <ngx-charts-line-chart\r\n                                        *fuseIfOnDom\r\n                                        [scheme]=\"widgets.widget8.scheme\"\r\n                                        [results]=\"widgets.widget8.data\"\r\n                                        [xAxis]=\"false\"\r\n                                        [yAxis]=\"true\"\r\n                                        [yScaleMin]=\"widgets.widget8.dataMin\"\r\n                                        [yScaleMax]=\"widgets.widget8.dataMax\">\r\n                                    </ngx-charts-line-chart>\r\n                                </div>\r\n                            </mat-tab>\r\n\r\n                            <mat-tab label=\"1MONTH\">\r\n                                <div class=\"h-200 my-16\">\r\n                                    <ngx-charts-line-chart\r\n                                        *fuseIfOnDom\r\n                                        [scheme]=\"widgets.widget8.scheme\"\r\n                                        [results]=\"widgets.widget8.data\"\r\n                                        [xAxis]=\"false\"\r\n                                        [yAxis]=\"true\"\r\n                                        [yScaleMin]=\"widgets.widget8.dataMin\"\r\n                                        [yScaleMax]=\"widgets.widget8.dataMax\">\r\n                                    </ngx-charts-line-chart>\r\n                                </div>\r\n                            </mat-tab>\r\n                        </mat-tab-group>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n\r\n                <!-- / Widget 8 -->\r\n\r\n                <!-- Widget 9 -->\r\n                <div class=\"mb-48\" [ngClass.lt-lg]=\"'mr-32'\" [ngClass.xs]=\"'mr-0'\">\r\n\r\n                    <div class=\"pb-24 font-size-18 font-weight-300\" [ngClass.lt-lg]=\"'pt-0'\">\r\n                        What are your top campaigns?\r\n                    </div>\r\n\r\n                    <div class=\"fuse-card\">\r\n\r\n                        <div class=\"p-16\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                            <div class=\"h1 pr-16\">Top campaigns</div>\r\n\r\n                            <div>\r\n                                <button mat-icon-button [matMenuTriggerFor]=\"card20Menu\" aria-label=\"more\">\r\n                                    <mat-icon>more_vert</mat-icon>\r\n                                </button>\r\n\r\n                                <mat-menu #card20Menu=\"matMenu\">\r\n                                    <button fxLayout=\"row\" fxLayoutAlign=\"start center\" mat-menu-item>\r\n                                        <mat-icon color=\"accent\">check_box</mat-icon>\r\n                                        <span>Show Clicks</span>\r\n                                    </button>\r\n                                    <button fxLayout=\"row\" fxLayoutAlign=\"start center\" mat-menu-item>\r\n                                        <mat-icon color=\"accent\">check_box</mat-icon>\r\n                                        <span>Show Conversion</span>\r\n                                    </button>\r\n                                    <button fxLayout=\"row\" fxLayoutAlign=\"start center\" mat-menu-item>\r\n                                        <mat-icon>check_box_outline_blank</mat-icon>\r\n                                        <span>Show CPC</span>\r\n                                    </button>\r\n                                </mat-menu>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <table class=\"simple clickable\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th></th>\r\n                                    <th class=\"text-right\">Clicks</th>\r\n                                    <th class=\"text-right\">Conv</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let row of widgets.widget9.rows\">\r\n                                    <td>{{row.title}}</td>\r\n                                    <td class=\"text-right\">{{row.clicks}}</td>\r\n                                    <td class=\"text-right\">{{row.conversion}}</td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n\r\n                        <div class=\"card-divider full-width\"></div>\r\n\r\n                        <div class=\"p-8 pt-16\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                            <button mat-button color=\"accent\">GO TO CAMPAIGNS</button>\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n                <!-- / widget 9 -->\r\n\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/apps/dashboards/analytics/analytics.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/main/apps/dashboards/analytics/analytics.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n#dashboard-analytics .main-widget {\n  display: flex;\n  flex-direction: column; }\n#dashboard-analytics .content {\n  display: flex;\n  flex: 1 1 auto;\n  padding: 32px;\n  min-width: 0; }\n@media (max-width: 1279px) {\n    #dashboard-analytics .content {\n      flex-direction: column; } }\n#dashboard-analytics .content .left {\n    display: flex;\n    flex-direction: column;\n    flex: 1 1 auto;\n    min-width: 0; }\n#dashboard-analytics .content .left .widget {\n      flex: 1 1 auto;\n      min-width: 0; }\n#dashboard-analytics .content .right {\n    display: flex;\n    flex: 0 0 auto;\n    width: 320px;\n    min-width: 320px;\n    max-width: 320px; }\n@media (max-width: 1279px) {\n      #dashboard-analytics .content .right {\n        flex: 1 0 100%;\n        margin-top: 32px;\n        width: 100%;\n        min-width: 0;\n        max-width: none; } }\n@media (max-width: 1279px) {\n      #dashboard-analytics .content .right .fuse-card {\n        width: 100%;\n        min-width: 0;\n        max-width: none; } }\n"

/***/ }),

/***/ "./src/app/main/apps/dashboards/analytics/analytics.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/main/apps/dashboards/analytics/analytics.component.ts ***!
  \***********************************************************************/
/*! exports provided: AnalyticsDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsDashboardComponent", function() { return AnalyticsDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
/* harmony import */ var app_main_apps_dashboards_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/main/apps/dashboards/analytics/analytics.service */ "./src/app/main/apps/dashboards/analytics/analytics.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AnalyticsDashboardComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {AnalyticsDashboardService} _analyticsDashboardService
     */
    function AnalyticsDashboardComponent(_analyticsDashboardService) {
        this._analyticsDashboardService = _analyticsDashboardService;
        this.widget1SelectedYear = '2016';
        this.widget5SelectedDay = 'today';
        // Register the custom chart.js plugin
        this._registerCustomChartJSPlugin();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    AnalyticsDashboardComponent.prototype.ngOnInit = function () {
        // Get the widgets from the service
        this.widgets = this._analyticsDashboardService.widgets;
    };
    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Register a custom plugin
     */
    AnalyticsDashboardComponent.prototype._registerCustomChartJSPlugin = function () {
        window.Chart.plugins.register({
            afterDatasetsDraw: function (chart, easing) {
                // Only activate the plugin if it's made available
                // in the options
                if (!chart.options.plugins.xLabelsOnTop ||
                    (chart.options.plugins.xLabelsOnTop && chart.options.plugins.xLabelsOnTop.active === false)) {
                    return;
                }
                // To only draw at the end of animation, check for easing === 1
                var ctx = chart.ctx;
                chart.data.datasets.forEach(function (dataset, i) {
                    var meta = chart.getDatasetMeta(i);
                    if (!meta.hidden) {
                        meta.data.forEach(function (element, index) {
                            // Draw the text in black, with the specified font
                            ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
                            var fontSize = 13;
                            var fontStyle = 'normal';
                            var fontFamily = 'Roboto, Helvetica Neue, Arial';
                            ctx.font = window.Chart.helpers.fontString(fontSize, fontStyle, fontFamily);
                            // Just naively convert to string for now
                            var dataString = dataset.data[index].toString() + 'k';
                            // Make sure alignment settings are correct
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'middle';
                            var padding = 15;
                            var startY = 24;
                            var position = element.tooltipPosition();
                            ctx.fillText(dataString, position.x, startY);
                            ctx.save();
                            ctx.beginPath();
                            ctx.setLineDash([5, 3]);
                            ctx.moveTo(position.x, startY + padding);
                            ctx.lineTo(position.x, position.y - padding);
                            ctx.strokeStyle = 'rgba(255,255,255,0.12)';
                            ctx.stroke();
                            ctx.restore();
                        });
                    }
                });
            }
        });
    };
    AnalyticsDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'analytics-dashboard',
            template: __webpack_require__(/*! ./analytics.component.html */ "./src/app/main/apps/dashboards/analytics/analytics.component.html"),
            styles: [__webpack_require__(/*! ./analytics.component.scss */ "./src/app/main/apps/dashboards/analytics/analytics.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_1__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [app_main_apps_dashboards_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_2__["AnalyticsDashboardService"]])
    ], AnalyticsDashboardComponent);
    return AnalyticsDashboardComponent;
}());



/***/ }),

/***/ "./src/app/main/apps/dashboards/analytics/analytics.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/main/apps/dashboards/analytics/analytics.module.ts ***!
  \********************************************************************/
/*! exports provided: AnalyticsDashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsDashboardModule", function() { return AnalyticsDashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/index.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_charts__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/index.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _fuse_components_widget_widget_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fuse/components/widget/widget.module */ "./src/@fuse/components/widget/widget.module.ts");
/* harmony import */ var app_main_apps_dashboards_analytics_analytics_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/main/apps/dashboards/analytics/analytics.component */ "./src/app/main/apps/dashboards/analytics/analytics.component.ts");
/* harmony import */ var app_main_apps_dashboards_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/main/apps/dashboards/analytics/analytics.service */ "./src/app/main/apps/dashboards/analytics/analytics.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: '**',
        component: app_main_apps_dashboards_analytics_analytics_component__WEBPACK_IMPORTED_MODULE_8__["AnalyticsDashboardComponent"],
        resolve: {
            data: app_main_apps_dashboards_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_9__["AnalyticsDashboardService"]
        }
    }
];
var AnalyticsDashboardModule = /** @class */ (function () {
    function AnalyticsDashboardModule() {
    }
    AnalyticsDashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                app_main_apps_dashboards_analytics_analytics_component__WEBPACK_IMPORTED_MODULE_8__["AnalyticsDashboardComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_3__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyD81ecsCj4yYpcXSLFcYU97PvRsE_X8Bx8'
                }),
                ng2_charts__WEBPACK_IMPORTED_MODULE_4__["ChartsModule"],
                _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_5__["NgxChartsModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_6__["FuseSharedModule"],
                _fuse_components_widget_widget_module__WEBPACK_IMPORTED_MODULE_7__["FuseWidgetModule"]
            ],
            providers: [
                app_main_apps_dashboards_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_9__["AnalyticsDashboardService"]
            ]
        })
    ], AnalyticsDashboardModule);
    return AnalyticsDashboardModule;
}());



/***/ }),

/***/ "./src/app/main/apps/dashboards/analytics/analytics.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/main/apps/dashboards/analytics/analytics.service.ts ***!
  \*********************************************************************/
/*! exports provided: AnalyticsDashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsDashboardService", function() { return AnalyticsDashboardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AnalyticsDashboardService = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    function AnalyticsDashboardService(_httpClient) {
        this._httpClient = _httpClient;
    }
    /**
     * Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    AnalyticsDashboardService.prototype.resolve = function (route, state) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            Promise.all([
                _this.getWidgets()
            ]).then(function () {
                resolve();
            }, reject);
        });
    };
    /**
     * Get widgets
     *
     * @returns {Promise<any>}
     */
    AnalyticsDashboardService.prototype.getWidgets = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._httpClient.get('api/analytics-dashboard-widgets')
                .subscribe(function (response) {
                _this.widgets = response;
                resolve(response);
            }, reject);
        });
    };
    AnalyticsDashboardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AnalyticsDashboardService);
    return AnalyticsDashboardService;
}());



/***/ })

}]);
//# sourceMappingURL=dashboards-analytics-analytics-module.js.map