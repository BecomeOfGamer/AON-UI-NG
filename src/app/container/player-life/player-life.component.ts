import { Component, OnInit } from '@angular/core';

import { Player } from '@models/Player';
import { PlayerService } from '@services/player.service';

import { environment } from '@env/environment';

@Component({
  selector: 'app-player-life',
  templateUrl: './player-life.component.html',
  styleUrls: ['./player-life.component.scss']
})
export class PlayerLifeComponent implements OnInit {

  public player: Player;

  constructor(
    private playerService: PlayerService,
  ) { }

  ngOnInit() {
    this.playerService.getPlayer().subscribe(player => this.player = player);

    // Mock test
    if (!environment.production) {
      this.mockHPAnimate(2000, 80);
      this.mockMPAnimate(1500, 40);
    }
  }

  /**
   * 血條樣式
   */
  renderHP(): Object {
    const { CurrentHP, CurrentMaxHP } = this.player;
    return { width: `${Math.round(CurrentHP / CurrentMaxHP * 100)}%` };
  }

  /**
   * 魔力樣式
   */
  renderMP(): Object {
    const { CurrentMP, CurrentMaxMP } = this.player;
    return { width: `${Math.round(CurrentMP / CurrentMaxMP * 100)}%` };
  }

  /**
   * HP動畫模擬
   * @param interval 頻率(毫秒)
   * @param damage 傷害
   */
  mockHPAnimate(interval: number, damage: number) {
    setInterval(() => {
      const { CurrentHP, CurrentMaxHP } = this.player;
      this.player.CurrentHP = CurrentHP - damage > 0 ? CurrentHP - damage : CurrentMaxHP;
      this.playerService.update(this.player);
    }, interval);
  }

  /**｀
   * MP動畫模擬
   * @param interval 頻率(毫秒)
   * @param damage 傷害
   */
  mockMPAnimate(interval: number, damage: number) {
    setInterval(() => {
      const { CurrentMP, CurrentMaxMP } = this.player;
      this.player.CurrentMP = CurrentMP - damage > 0 ? CurrentMP - damage : CurrentMaxMP;
      this.playerService.update(this.player);
    }, interval);
  }
}
