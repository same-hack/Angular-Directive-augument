import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appPreventDoubleClick]',
})
export class PreventDoubleClickDirective {
  /**コンポーネントから引数を受け取る */
  @Input() timer!: number;

  /**disabledを解除するまでの時間※ミリ秒 */
  TIMER: number = 3000;

  // DI(依存性の注入)
  // DOMへのアクセスが可能となる
  constructor(private element: ElementRef) {}

  // クリックイベントを受け取り処理を実行
  @HostListener('click') public onClick() {
    console.log('要素をdisabledにします');
    // 受け取ったHTML要素のdisabled属性をtrueにして、非活性にする
    this.element.nativeElement.disabled = true;
    // my-disabledというクラス名を追加し、CSSでデザインを追加 ※なくてもOK
    this.element.nativeElement.classList.add('my-disabled');

    // timerに値がある → timerの値を設定
    // timerに値がない → TIMERの値を設定
    const interval = this.timer || this.TIMER;

    // 指定した時間が経過したら処理を実行
    setTimeout(() => {
      // disabled属性をfalseにして活性状態に戻す
      this.element.nativeElement.disabled = false;
      // 追加したクラス名を削除
      this.element.nativeElement.classList.remove('my-disabled');
    }, interval);
  }
}
