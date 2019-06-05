import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DealsService
{

  constructor(private http: HttpClient)
  {
  }

  public getCategories(): Observable<any[]>
  {
    return this.http.get<any[]>('http://localhost:8080/getCategories');
  }

  public deals: Array<any> = [
    {
      'id': '2701294',
      'couponid': '1979137',
      'percent_off': '0',
      'dollars_off': '0',
      'store_id': '1',
      'featured_on_store': '35',
      'redemptions_2weeks': '51408',
      'private': '0',
      'expire_date': '1672512300',
      'start_date': '0',
      'code': 'SAVE10NOW',
      'title': '$10 Off Your Prime Now Order',
      'description': 'Get $10 off your next order when you enter this Amazon coupon code at checkout. Terms and restrictions apply.',
      'type': 'code',
      'store_slug': 'amazon',
      'store_name': 'Amazon',
      'verified_time': '0',
      'is_top_inline_store': '1',
      'views': '51408',
      'storeLogoUrl': '/images/slickdeals/storelogo/150x150/1.png?7847',
      'storeLogoUrlx216': '/images/slickdeals/storelogo/216x165/1.png?7847',
      'discount': null,
      'url': '/coupons/amazon/?couponid=1979137',
      'storeUrl': '/coupons/amazon/'
    },
    {
      'id': '2928037',
      'couponid': '2301037',
      'percent_off': '0',
      'dollars_off': '0',
      'store_id': '389',
      'featured_on_store': '8',
      'redemptions_2weeks': '2071',
      'private': '0',
      'expire_date': '1558162740',
      'start_date': '1555657200',
      'code': 'DMACB19MFTWR10',
      'title': '$10 Off Athletic or Golf Footwear Orders of $69.99+ & Free Shipping\r\n',
      'description': 'Take $10 off your athletic footwear or golf footwear purchase of $69.99 or more when you enter this Dick\'s Sporting Goods coupon code at checkout. Some restrictions apply. Free shipping included.',
      'type': 'code',
      'store_slug': 'dicks-sporting-goods',
      'store_name': 'Dicks Sporting Goods',
      'verified_time': '0',
      'is_top_inline_store': '1',
      'views': '2071',
      'storeLogoUrl': '/images/slickdeals/storelogo/150x150/389.png?7847',
      'storeLogoUrlx216': '/images/slickdeals/storelogo/216x165/389.png?7847',
      'discount': null,
      'url': '/coupons/dicks-sporting-goods/?couponid=2301037',
      'storeUrl': '/coupons/dicks-sporting-goods/'
    },
    {
      'id': '2939140',
      'couponid': '2304583',
      'percent_off': '25',
      'dollars_off': '0',
      'store_id': '16',
      'featured_on_store': '12',
      'redemptions_2weeks': '0',
      'private': '0',
      'expire_date': '1556261940',
      'start_date': '0',
      'code': 'SPRING19',
      'title': 'Extra 25% Off Clearance',
      'description': '',
      'type': 'code',
      'store_slug': 'jc-penney',
      'store_name': 'JCPenney',
      'verified_time': '0',
      'is_top_inline_store': '1',
      'views': '0',
      'storeLogoUrl': '/images/slickdeals/storelogo/150x150/16.png?7847',
      'storeLogoUrlx216': '/images/slickdeals/storelogo/216x165/16.png?7847',
      'discount': '25%',
      'url': '/jc-penney/?couponid=2304583',
      'storeUrl': '/coupons/jc-penney/'
    },
    {
      'id': '2744401',
      'couponid': '2155249',
      'percent_off': '0',
      'dollars_off': '0',
      'store_id': '439',
      'featured_on_store': '16',
      'redemptions_2weeks': '0',
      'private': '0',
      'expire_date': '1580543940',
      'start_date': '0',
      'code': 'WOWFRESH',
      'title': '$10 Off Orders $50+ at Walmart Grocery - New Customers Only',
      'description': '',
      'type': 'code',
      'store_slug': 'walmart',
      'store_name': 'Walmart',
      'verified_time': '0',
      'is_top_inline_store': '1',
      'views': '0',
      'storeLogoUrl': '/images/slickdeals/storelogo/150x150/439.png?7847',
      'storeLogoUrlx216': '/images/slickdeals/storelogo/216x165/439.png?7847',
      'discount': null,
      'url': '/coupons/walmart/?couponid=2155249',
      'storeUrl': '/coupons/walmart/'
    },
    {
      'id': '2937355',
      'couponid': '2301136',
      'percent_off': '40',
      'dollars_off': '0',
      'store_id': '370',
      'featured_on_store': '4',
      'redemptions_2weeks': '359',
      'private': '0',
      'expire_date': '1556114400',
      'start_date': '1555905600',
      'code': 'SAVE40AFF',
      'title': 'Extra 40% Off Select Styles',
      'description': 'Get an extra 40% discount on select clothing and footwear when you use this Finish Line promo code at checkout.',
      'type': 'code',
      'store_slug': 'finish-line',
      'store_name': 'Finish Line',
      'verified_time': '1555698430',
      'is_top_inline_store': '1',
      'views': '359',
      'storeLogoUrl': '/images/slickdeals/storelogo/150x150/370.png?7847',
      'storeLogoUrlx216': '/images/slickdeals/storelogo/216x165/370.png?7847',
      'discount': '40%',
      'url': '/coupons/finish-line/?couponid=2301136',
      'storeUrl': '/coupons/finish-line/'
    },
    {
      'id': '2939116',
      'couponid': '2234683',
      'percent_off': '40',
      'dollars_off': '0',
      'store_id': '471',
      'featured_on_store': '7',
      'redemptions_2weeks': '109',
      'private': '0',
      'expire_date': '1556175540',
      'start_date': '0',
      'code': 'APRILREG40',
      'title': '40% Off Any 1 Regular-Priced Item',
      'description': 'Enter this Joann coupon code at checkout to save 40% off any one regular priced item within your order. Some restrictions apply. ',
      'type': 'code',
      'store_slug': 'joann',
      'store_name': 'Joann',
      'verified_time': '0',
      'is_top_inline_store': '1',
      'views': '109',
      'storeLogoUrl': '/images/slickdeals/storelogo/150x150/471.png?7847',
      'storeLogoUrlx216': '/images/slickdeals/storelogo/216x165/471.png?7847',
      'discount': '40%',
      'url': '/coupons/joann/?couponid=2234683',
      'storeUrl': '/coupons/joann/'
    },
    {
      'id': '2938963',
      'couponid': '1917223',
      'percent_off': '0',
      'dollars_off': '0',
      'store_id': '1390',
      'featured_on_store': '8',
      'redemptions_2weeks': '1851',
      'private': '0',
      'expire_date': '1556434740',
      'start_date': '0',
      'code': '73024',
      'title': '40% Off One Regular-Priced Item',
      'description': 'Get a 40% off discount on one regular-priced item when you apply this Hobby Lobby coupon code at checkout. Offer good for one item at regular price only. Limit one coupon per customer per day. Must present coupon at time of purchase. Offer is not valid with any other coupon, discount or previous purchase. One cut or one bolt of fabric or trim “by the yard” equals one item. Online fabric & trim discount is limited to 10 yards, single cut. Excludes Heidi Swapp™ Minc.™ Foil Applicator, CRICUT® products, Gemini Machine™ Crafters Companion, Silhouette CAMEO® Machine, candy & snack products, gum & mints, helium tanks, gift cards, custom orders, special orders, labor, rentals or class fees.',
      'type': 'code',
      'store_slug': 'hobby-lobby',
      'store_name': 'Hobby Lobby',
      'verified_time': '0',
      'is_top_inline_store': '1',
      'views': '1851',
      'storeLogoUrl': '/images/slickdeals/storelogo/150x150/1390.png?7847',
      'storeLogoUrlx216': '/images/slickdeals/storelogo/216x165/1390.png?7847',
      'discount': null,
      'url': '/coupons/hobby-lobby/?couponid=1917223',
      'storeUrl': '/coupons/hobby-lobby/'
    },
    {
      'id': '2729662',
      'couponid': '2091592',
      'percent_off': '50',
      'dollars_off': '0',
      'store_id': '1255',
      'featured_on_store': '14',
      'redemptions_2weeks': '590',
      'private': '0',
      'expire_date': '2556172740',
      'start_date': '0',
      'code': '50HALFBDAY',
      'title': '50% Off One Regular Price Purchases ',
      'description': 'Enter this Michaels coupon code at checkout to get 50% off one regular price purchases.',
      'type': 'code',
      'store_slug': 'michaels',
      'store_name': 'Michaels',
      'verified_time': '0',
      'is_top_inline_store': '1',
      'views': '590',
      'storeLogoUrl': '/images/slickdeals/storelogo/150x150/1255.png?7847',
      'storeLogoUrlx216': '/images/slickdeals/storelogo/216x165/1255.png?7847',
      'discount': '50%',
      'url': '/michaels/?couponid=2091592',
      'storeUrl': '/coupons/michaels/'
    },
    {
      'id': '2862844',
      'couponid': '2237944',
      'percent_off': '25',
      'dollars_off': '0',
      'store_id': '329',
      'featured_on_store': '10',
      'redemptions_2weeks': '145',
      'private': '0',
      'expire_date': '1556693940',
      'start_date': '0',
      'code': 'BDAYAPR',
      'title': '25% Off Your Birthday Month Order with Gap Card',
      'description': '',
      'type': 'code',
      'store_slug': 'old-navy',
      'store_name': 'Old Navy',
      'verified_time': '0',
      'is_top_inline_store': '1',
      'views': '145',
      'storeLogoUrl': '/images/slickdeals/storelogo/150x150/329.png?7847',
      'storeLogoUrlx216': '/images/slickdeals/storelogo/216x165/329.png?7847',
      'discount': '25%',
      'url': '/coupons/old-navy/?couponid=2237944',
      'storeUrl': '/coupons/old-navy/'
    }
  ];
}