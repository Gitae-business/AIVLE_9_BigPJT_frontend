import { NextResponse } from 'next/server';

// POST
export async function POST(req) {
  const ads = [
    {
      ad_id: 5,
      user_id: 1,
      title: '서울퍼시픽 안과의원',
      budget: '4000.00',
      product_category_id: 8,
      target_id: 5,
      start_date: '2025-01-31T15:00:00.000Z',
      end_date: '2025-12-30T15:00:00.000Z',
      region_id: 2,
      image_id: 7,
      uid: 1,
      id: 5,
      image_path: 'https://i.ibb.co/SQLxzP6/images.jpg',
      created_at: '2025-01-13T22:37:59.000Z',
      exposure_count: 17,
      remaining_budget: '3830.00',
      is_enabled: 1
    },
    {
      ad_id: 90,
      user_id: 1,
      title: '탑마루',
      budget: '3500.00',
      product_category_id: 31,
      target_id: 11,
      start_date: '2025-01-06T15:00:00.000Z',
      end_date: '2025-01-12T15:12:00.000Z',
      region_id: 90,
      image_id: 90,
      uid: 1,
      id: 90,
      image_path: 'https://i.imgur.com/WGosfHf.png',
      created_at: '2025-01-21T23:23:00.000Z',
      exposure_count: 117,
      remaining_budget: '2330.00',
      is_enabled: 1
    },
    {
      ad_id: 91,
      user_id: 1,
      title: '뮤지컬 웃는남자',
      budget: '3500.00',
      product_category_id: 42,
      target_id: 11,
      start_date: '2025-01-08T15:00:00.000Z',
      end_date: '2025-01-16T15:12:00.000Z',
      region_id: 91,
      image_id: 91,
      uid: 1,
      id: 91,
      image_path: 'https://i.imgur.com/5z5KFkb.jpeg',
      created_at: '2025-01-21T23:23:14.000Z',
      exposure_count: 92,
      remaining_budget: '2580.00',
      is_enabled: 1
    },
    {
      ad_id: 92,
      user_id: 1,
      title: '에듀윌',
      budget: '3500.00',
      product_category_id: 46,
      target_id: 12,
      start_date: '2025-01-08T15:00:00.000Z',
      end_date: '2025-01-15T15:00:00.000Z',
      region_id: 92,
      image_id: 92,
      uid: 1,
      id: 92,
      image_path: 'https://i.imgur.com/2YJSmwP.jpeg',
      created_at: '2025-01-21T23:23:16.000Z',
      exposure_count: 59,
      remaining_budget: '2910.00',
      is_enabled: 1
    },
    {
      ad_id: 93,
      user_id: 1,
      title: 'HDC 현대산업개발',
      budget: '3500.00',
      product_category_id: 47,
      target_id: 10,
      start_date: '2025-01-10T15:00:00.000Z',
      end_date: '2025-01-14T15:12:00.000Z',
      region_id: 93,
      image_id: 93,
      uid: 1,
      id: 93,
      image_path: 'https://i.imgur.com/95J4KIw.jpeg',
      created_at: '2025-01-21T23:23:17.000Z',
      exposure_count: 54,
      remaining_budget: '2960.00',
      is_enabled: 1
    },
    {
      ad_id: 94,
      user_id: 1,
      title: '서울 저스트 치과의원',
      budget: '3500.00',
      product_category_id: 44,
      target_id: 12,
      start_date: '2025-01-09T15:00:00.000Z',
      end_date: '2025-01-16T15:00:00.000Z',
      region_id: 94,
      image_id: 94,
      uid: 1,
      id: 94,
      image_path: 'https://i.imgur.com/5Dx42TH.jpeg',
      created_at: '2025-01-21T23:23:18.000Z',
      exposure_count: 90,
      remaining_budget: '2600.00',
      is_enabled: 1
    },
    {
      ad_id: 95,
      user_id: 1,
      title: '밀리의 서재',
      budget: '3500.00',
      product_category_id: 42,
      target_id: 12,
      start_date: '2025-01-07T15:00:00.000Z',
      end_date: '2025-01-13T15:00:00.000Z',
      region_id: 95,
      image_id: 95,
      uid: 1,
      id: 95,
      image_path: 'https://i.imgur.com/V2cH54G.jpeg',
      created_at: '2025-01-21T23:23:19.000Z',
      exposure_count: 65,
      remaining_budget: '2850.00',
      is_enabled: 1
    }
  ]
  return NextResponse.json(ads, { status: 200 });
}
