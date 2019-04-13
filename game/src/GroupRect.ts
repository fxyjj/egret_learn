class GroupRect extends egret.Sprite{
    public constructor(){
        super();
        this.createRects();
    }
    private _rects:Array<Rect>;
    private createRects(){
        this._rects = [];
        for(var i = 0;i<4;i++){
            var rect : Rect = new Rect();
            this._rects.push(rect);
            rect.x = rect.width*i;
            this.addChild(rect);
            rect.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onClickRect,this);
        }
    }

    private onClickRect(evt : egret.TouchEvent){
        evt.target.onRectClick();
        if(evt.target.type == RectType.NONCLICKABLE){
            this.dispatchEventWith("gameOver");
        }
        else{
            this.dispatchEventWith("clickRight");
        }
    }

    private _currentBlackRectIndex : number = 0;

    public createBlackRect(){
        var n:number = Math.random();
        if(n >= 0 && n < 0.25){
            this._currentBlackRectIndex = 0;
        }
        else if( n >= 0.25 && n < 0.5){
            this._currentBlackRectIndex = 1;
        }
        else if(n >= 0.5 && n < 0.75){
            this._currentBlackRectIndex = 2;
        }
        else if(n >= 0.75 && n < 1){
            this._currentBlackRectIndex = 3;
        }
        this._rects[this._currentBlackRectIndex].type = RectType.CLICKABLE;

    }
}