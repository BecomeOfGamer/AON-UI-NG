import { Skill } from '../models/Skill';

const MockSkills: Array<Skill> = [
  {
    Name: '褶裙',
    Enabled: true,
    Display: true,
    Toggle: true,
    Webpath: 'skill/a02/a02_1.png',
    Description: '移動速度+45。',
    CDPercent: 0,
    CurrentCD: 0,
    MaxCD: 0,
    CanLevelUp: true,
    CurrentLevel: 1,
    MaxLevel: 4,
    Tips: {
      header: '褶裙',
      content: '移動速度<num>+45<num>。<br /><br /><unique>唯一持有，移動速度不得累計。</unique>',
    },
  },
  {
    Name: '三河魂',
    Enabled: true,
    Display: true,
    Toggle: false,
    Webpath: 'skill/a02/a02_2.png',
    Description: '施放自身的王者之氣，能增加周圍1500友軍15的防禦和20的跑速。',
    CDPercent: 0,
    CurrentCD: 0,
    MaxCD: 0,
    CanLevelUp: true,
    CurrentLevel: 4,
    MaxLevel: 4,
    Tips: {
      header: '三河魂',
      content: '施放自身的王者之氣，能增加周圍<num>(15/25/35)</num>友軍<num>20</num><str>(+10)</str>的防禦和<num>30</num><agi>(+10)</agi>的跑速。',
    },
  },
  {
    Name: '變硬',
    Enabled: true,
    Display: true,
    Toggle: true,
    Webpath: 'skill/a02/a02_3.png',
    Description: '遇到異性友軍變硬，能增加自身10的精神力和15的傷害力，持續5秒。',
    CDPercent: 0,
    CurrentCD: 0,
    MaxCD: 0,
    CanLevelUp: true,
    CurrentLevel: 2,
    MaxLevel: 3,
    Tips: {
      header: '三河魂',
      content: `遇到異性友軍變硬，能增加自身<num>10</num><int>(+10)</int>的精神力和<num>15</num><str>(+5)</str>的傷害力，
             持續<num>5</num>秒。<br /><br /><unique>唯一擁有，
             不得與友軍共用。</unique>`,
    },
  },
  {
    Name: '長槍',
    Enabled: true,
    Display: true,
    Toggle: false,
    Webpath: 'skill/a02/a02_4.png',
    Description: '攻擊傷害+14。',
    CDPercent: 0,
    CurrentCD: 0,
    MaxCD: 0,
    CanLevelUp: false,
    CurrentLevel: 3,
    MaxLevel: 4,
    Tips: {
      header: '長槍',
      content: `攻擊傷害<num>+14</num>。`,
    },
  },
];

export default MockSkills;
