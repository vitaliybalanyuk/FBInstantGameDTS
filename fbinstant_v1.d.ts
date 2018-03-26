
//Copyright (c) 2014-present, Egret Technology.
//fbinstant.1.0.js
declare class FBInstant {
    /**
     * 获取语言种类 zh_CN en_US
     */
    static locale: Object;
    /**
     * 获取运行的平台信息 'iOS', 'android' 和 'web'
     */
    static platform: Object;
    /**
     * 获取用户信息
     */
    static player: FBPlayer;
    /**
     * SDK 初始化结束会返回一个 Promise 方法
     * 应当在其他 API 使用前调用
     */
    static initializeAsync(): promise;
    /**
     * 通知平台资源加载的百分比
     * @param percentage 0-100
     */
    static setLoadingProgress(percentage: number): void;    
    /**
     * 游戏已完成加载资源，用户点击了开始游戏的按钮
     * 返回一个 Promise 方法
     */
    static startGameAsync(): promise;
    /**
     * 通知 Facebook 平台当前的分数
     * @param score 玩家在游戏里的分数
     */
    static setScore(score: number): void;
    /**
     * 显示平台统一的游戏结束画面
     * 当游戏重新开始的时候，返回一个 Promise 方法。
     */
    static endGameAsync(): promise;
    /**
     * 进行截屏，用户以后可以分享给好友。
     */
    static takeScreenshot(): void;
    /**
     * 发送分享给好友的截屏画面。
     * @param base64picture 把截图进行 base64 编码后的字符串
     */
    static sendScreenshot(base64picture: string): void;
    /**
     * 遇到错误中止游戏。只有当游戏进入不可恢复的状态时才被调用。
     * @param e 错误信息
     */
    static abort(e:any): void;
}
interface FBPlayer{
    /**
     * 用户的唯一标识ID
     */
    id: string;
}
interface promise {
    /**
     * @param fuc 回调方法
     */
    then(fuc: Function): void;
}