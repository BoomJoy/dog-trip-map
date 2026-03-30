import type { DogFriendlyPlace } from '@/lib/types';

export const mockPlaces: DogFriendlyPlace[] = [
  {
    id: '1',
    name: '青西郊野公园露营区',
    region: '上海',
    city: '上海',
    driveMinutesFromShanghai: 65,
    dogRules: '牵引绳入园，注意清理便便',
    tags: ['草地', '露营', '徒步'],
    lat: 31.0817,
    lng: 121.0593,
    summary: '大片草地，适合遛狗和轻露营。'
  },
  {
    id: '2',
    name: '西溪湿地（可步行区）',
    region: '浙江',
    city: '杭州',
    driveMinutesFromShanghai: 165,
    dogRules: '部分区域可携犬，建议提前确认景区公告',
    tags: ['湿地', '步道', '拍照'],
    lat: 30.272,
    lng: 120.0636,
    summary: '水网步道多，适合慢节奏遛狗。'
  },
  {
    id: '3',
    name: '太湖湾国家湿地公园',
    region: '江苏',
    city: '无锡',
    driveMinutesFromShanghai: 145,
    dogRules: '建议避开节假日高峰时段',
    tags: ['湿地', '自然', '亲子'],
    lat: 31.4699,
    lng: 120.2606,
    summary: '环湖步道平缓，适合带狗慢走。'
  },
  {
    id: '4',
    name: '莫干山山脚宠物友好民宿区',
    region: '浙江',
    city: '湖州',
    driveMinutesFromShanghai: 170,
    dogRules: '入住前请和民宿确认宠物政策',
    tags: ['山景', '民宿', '周末游'],
    lat: 30.5536,
    lng: 119.8789,
    summary: '周边徒步路线多，适合周末短途。'
  }
];
