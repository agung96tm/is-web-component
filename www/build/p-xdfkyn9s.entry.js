import{r as t,h as s,H as i,c as e}from"./p-1e09b2a3.js";const h=class{constructor(s){t(this,s),this.rounded=!1}render(){return s(i,{class:{[this.color]:!0,rounded:this.rounded,hidden:!this.text}},s("span",null,this.text))}static get style(){return".sc-is-badge-h{-webkit-font-smoothing:antialiased;padding:var(--padding-top,0) var(--padding-right,8px) var(--padding-bottom,0) var(--padding-left,8px);display:inline-block;min-width:10px;height:var(--height,24px);color:var(--color,#fff);text-align:center;white-space:nowrap;contain:content;vertical-align:baseline;background-color:var(--background-color,#327bb7);border-color:transparent}.sc-is-badge-h span.sc-is-badge{font-family:var(--font-family,\"Helvetica Neue\",Helvetica,Arial,sans-serif);font-size:var(--font-size,13px);font-weight:var(--font-weight,normal);line-height:1;display:-ms-flexbox;display:flex;height:100%;-ms-flex-align:center;align-items:center}.primary.sc-is-badge-h{color:#fff;background-color:#327bb7}.secondary.sc-is-badge-h{color:#fff;background-color:#ff7d09}.success.sc-is-badge-h{color:#fff;background-color:#00c092}.warning.sc-is-badge-h{color:#fff;background-color:#e8d700}.error.sc-is-badge-h{color:#fff;background-color:#d0021b}.light.sc-is-badge-h{color:#000;background-color:#e5e5e5}.info.sc-is-badge-h{color:#000;background-color:#b9b9b9}.dark.sc-is-badge-h{color:#fff;background-color:#5d5d5d}.white.sc-is-badge-h{color:#000;background-color:#fff}.black.sc-is-badge-h{color:#fff;background-color:#000}.rounded.sc-is-badge-h{border-radius:var(--border-radius,4px)}.hidden.sc-is-badge-h{display:none}"}},l=class{constructor(i){t(this,i),this.disabled=!1,this.placeholder="Pick some",this.items=[],this.selected=[],this.labelTo={remove:"Click to Remove",select:"Click to Select"},this.limit=3,this.limitText=t=>`and ${t} more`,this.labelSelected="✓",this.showSelectedBadge=!1,this.isExpanded=!1,this.keyword="",this.textSelected=this.placeholder,this.tags=null,this.filteredItems=this.items,this.renderSelectedItems=()=>{let t=[];return this.selected&&this.selected.map((i,e)=>{e<this.limit?t.push(s("div",{class:"multiselect__tag"},s("is-badge",{color:"primary",text:i.name}),s("span",{class:"multiselect__tag--remove",color:"primary",onClick:()=>this.updateItems(i)},"x"))):t[this.limit+1]=s("span",{class:"multiselect__tag--more"},this.limitText(this.selected.length-this.limit))}),t},this.toggle=(t,s)=>{this.isExpanded=t,this.updatePlaceholder(),s||this.isExpanded&&setTimeout(()=>{this.textInput.focus()},200)},this.isSelected=t=>!!this.selected&&this.selected.some(s=>s.id===t.id),this.updateItems=t=>{this.selected=this.isSelected(t)?this.selected.filter(s=>s.id!==t.id):this.selected&&this.selected.length>0?[...this.selected,t]:[t],this.onSelected.emit(this.selected)},this.onFilteredItems=()=>{const t=this.textInput;t?(this.keyword=t.value,this.filteredItems=this.items.filter(t=>t.name.toLowerCase().includes(this.keyword.toLowerCase()))):this.filteredItems=this.items},this.onSelected=e(this,"onSelected",7)}getSelected(){return Promise.resolve(this.selected)}setItems(t,s){t!==s&&(this.items=t,this.textSelected=this.placeholder,this.selected=[],this.onFilteredItems())}setSelected(t,s){t!==s&&this.updatePlaceholder()}handleClick(t){this.multiselect.contains(t.target)||this.toggle(!1,!0)}updatePlaceholder(){this.textSelected=this.placeholder,this.selected&&this.selected.length>0&&!this.isExpanded&&(this.textSelected=this.selected.length+" options selected"),this.showSelectedBadge&&(this.tags=this.renderSelectedItems()),this.isExpanded&&(this.textSelected="")}componentWillLoad(){this.textSelected=this.placeholder,this.selected.length>0&&!this.isExpanded&&(this.textSelected=this.selected.length+" options selected"),this.showSelectedBadge&&(this.tags=this.renderSelectedItems())}render(){return s(i,{ref:t=>this.multiselect=t},s("div",{class:{multiselect:!0,multiselect__disabled:this.disabled}},s("div",{class:"multiselect__click-area",onClick:()=>this.toggle(!0),style:{zIndex:this.isExpanded?"-1":"0"}}),s("div",{class:"multiselect__placeholder"},this.showSelectedBadge&&this.selected&&this.selected.length>0?this.tags:this.textSelected),this.isExpanded&&s("div",{class:"multiselect__input"},s("input",{value:this.keyword,onInput:()=>this.onFilteredItems(),ref:t=>this.textInput=t,placeholder:this.placeholder})),s("div",{class:{btnToggle:!0,active:this.isExpanded},onClick:()=>this.toggle(!this.isExpanded)}," ")),this.isExpanded&&s("div",{class:"multiselect__content"},s("ul",{class:"multiselect__content--list"},this.filteredItems.length>0?this.filteredItems.map((t,i)=>s("li",{class:{"multiselect__content--item":!0,"multiselect__content--selected":this.isSelected(t)},key:i,onClick:()=>this.updateItems(t),"label-selected":this.isSelected(t)?this.labelSelected:null,"label-to-remove":this.isSelected(t)?this.labelTo.remove:null,"label-to-select":this.isSelected(t)?null:this.labelTo.select},t.name)):s("li",{class:"not-found"},"Not found"))))}static get watchers(){return{items:["setItems"],selected:["setSelected"]}}static get style(){return".sc-is-multiselect-h{display:block;position:relative}.multiselect.sc-is-multiselect{position:relative;min-height:35px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;border-radius:5px;border:1px solid #e8e8e8;background:#fff;font-size:14px;outline:0;color:#35495e;font-family:Lato,Helvetica,sans-serif}.multiselect.multiselect__disabled.sc-is-multiselect{background:#e5e5e5;pointer-events:none;opacity:.6}.multiselect__click-area.sc-is-multiselect{background-color:transparent;position:absolute;width:100%;height:100%;top:0;left:0;display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end}.multiselect__placeholder.sc-is-multiselect{padding:5px 40px 5px 15px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-wrap:wrap;flex-wrap:wrap}.btnToggle.sc-is-multiselect{width:40px;height:35px;position:absolute;top:0;right:0;cursor:pointer;background-image:linear-gradient(45deg,transparent 50%,grey 0),linear-gradient(135deg,grey 50%,transparent 0);background-position:calc(100% - 20px) calc(1em + 2px),calc(100% - 15px) calc(1em + 2px);background-size:5px 5px,5px 5px,1px 1.5em;background-repeat:no-repeat}.btnToggle.active.sc-is-multiselect{background-image:linear-gradient(45deg,grey 50%,transparent 0),linear-gradient(135deg,transparent 50%,grey 0);background-position:calc(100% - 15px) 1em,calc(100% - 20px) 1em}.multiselect__input.sc-is-multiselect{padding-left:10px;margin-top:-10px;width:100%;height:100%;display:-ms-flexbox;display:flex}.multiselect__input.sc-is-multiselect input.sc-is-multiselect{width:calc(100% - 50px);height:100%;display:inline-block;min-height:35px;line-height:20px;border:none;border-radius:5px;background:#fff;padding:0 0 0 5px;-webkit-transition:border .1s ease;transition:border .1s ease;-webkit-box-sizing:border-box;box-sizing:border-box;vertical-align:top;outline:none;color:#35495e;font-family:Helvetica,sans-serif;font-size:14px}.multiselect__input.sc-is-multiselect .sc-is-multiselect::-webkit-input-placeholder{opacity:.5;color:#35495e;font-family:Helvetica,sans-serif}.multiselect__input.sc-is-multiselect .sc-is-multiselect::-moz-placeholder{opacity:.5;color:#35495e;font-family:Helvetica,sans-serif}.multiselect__input.sc-is-multiselect .sc-is-multiselect:-ms-input-placeholder{opacity:.5}.multiselect__input.sc-is-multiselect .sc-is-multiselect::-ms-input-placeholder{opacity:.5}.multiselect__input.sc-is-multiselect .sc-is-multiselect::placeholder{opacity:.5;color:#35495e;font-family:Helvetica,sans-serif}.multiselect__input.sc-is-multiselect .sc-is-multiselect:-ms-input-placeholder{color:#35495e;font-family:Helvetica,sans-serif}.multiselect__input.sc-is-multiselect .sc-is-multiselect::-ms-input-placeholder{color:#35495e;font-family:Helvetica,sans-serif}.multiselect__content.sc-is-multiselect{position:absolute;display:block;background:#fff;width:calc(100% - 2px);max-height:240px;overflow:auto;border:1px solid #e8e8e8;border-top:none;border-bottom-left-radius:5px;border-bottom-right-radius:5px;z-index:3;-webkit-overflow-scrolling:touch}.multiselect__content--list.sc-is-multiselect{list-style:none;display:inline-block;padding:0;margin:0;min-width:100%;vertical-align:top}.multiselect__content--item.sc-is-multiselect{padding:12px;line-height:16px;text-decoration:none;text-transform:none;position:relative;cursor:pointer;white-space:nowrap;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.multiselect__content--item.sc-is-multiselect:hover{background:#00c092;color:#fff;outline:none}.multiselect__content--item.sc-is-multiselect:hover:after{content:attr(label-to-select);font-size:12px}.multiselect__content--selected.sc-is-multiselect{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;background:#e5e5e5;color:#000}.multiselect__content--selected.sc-is-multiselect:after{content:attr(label-selected);color:#b9b9b9}.multiselect__content--selected.sc-is-multiselect:hover{background:#d0021b;color:#fff;outline:none}.multiselect__content--selected.sc-is-multiselect:hover:after{content:attr(label-to-remove);font-size:12px;color:#fff;font-weight:400}.multiselect__content--remove.sc-is-multiselect{background:#d0021b;color:#fff;outline:none}.not-found.sc-is-multiselect{height:35px;-ms-flex-pack:center;justify-content:center;font-size:12px;font-family:Helvetica,sans-serif}.multiselect__tag.sc-is-multiselect, .not-found.sc-is-multiselect{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.multiselect__tag.sc-is-multiselect{z-index:1;color:#000;margin:2.5px 10px 2.5px 0}.multiselect__tag--remove.sc-is-multiselect{padding:0 8px;border-left:1px solid #fff;font-size:.8em;line-height:1px;height:20px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;cursor:pointer}.multiselect__tag--remove[color~=primary].sc-is-multiselect{background-color:#327bb7;color:#fff}.multiselect__tag--more.sc-is-multiselect{height:25px;line-height:25px}.multiselect__tag.sc-is-multiselect is-badge.sc-is-multiselect{cursor:inherit;height:20px}"}};export{h as is_badge,l as is_multiselect};