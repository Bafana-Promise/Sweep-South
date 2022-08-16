/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-home',
  templateUrl: './home.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class homeComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_aBwZ3FOMwYuAucGb(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_aBwZ3FOMwYuAucGb(bh) {
    try {
      bh = this.sd_F3EkTgLOIoaK5YFp(bh);
      //appendnew_next_sd_aBwZ3FOMwYuAucGb
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_aBwZ3FOMwYuAucGb');
    }
  }

  //appendnew_flow_homeComponent_start

  sd_F3EkTgLOIoaK5YFp(bh) {
    try {
      this.page.headerItems = [];
      bh = this.sd_h9xJKJ0qzolEvjEj(bh);
      //appendnew_next_sd_F3EkTgLOIoaK5YFp
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_F3EkTgLOIoaK5YFp');
    }
  }

  sd_h9xJKJ0qzolEvjEj(bh) {
    try {
      const page = this.page;
      page.headerItems = [
        { name: '087-711-0573' },
        { name: 'SERVICES' },
        { name: 'CONNECT' },
        { name: 'INVITE & EARN' },
        { name: 'HELP' },
        { name: 'SIGN IN' },
      ];
      //appendnew_next_sd_h9xJKJ0qzolEvjEj
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_h9xJKJ0qzolEvjEj');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  //appendnew_flow_homeComponent_Catch
}
