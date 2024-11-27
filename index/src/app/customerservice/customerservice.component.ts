import { Component } from '@angular/core';

@Component({
  selector: 'app-customerservice',
  templateUrl: './customerservice.component.html',
  styleUrls: ['./customerservice.component.css']
})
export class CustomerserviceComponent {
  data = [
    { id: 1, category: 'recommended', name: 'Great Indian Festival 2024',name1:'Track your order' },
    { id: 2, category: 'recommended', name: 'Tracking your Package' ,name1:'Contact Courier'},
    { id: 3, category: 'recommended', name: 'Checking the Status of your Refund' ,name1:''},
    { id: 4, category: 'recommended', name: 'Return Pick-up Issues' ,name1:'' },
    { id: 5, category: 'recommended', name: 'Returns and Replacements - FAQ',name1:'' },
    { id: 6, category: 'recommended', name: 'Shipping Speeds & Charges' ,name1:''},
    { id: 6, category: 'recommended', name: 'Damaged, Defective or Wrong Product - FAQ',name1:'' },
    { id: 6, category: 'recommended', name: 'Late Shipments',name1:'' },
    { id: 6, category: 'recommended', name: 'Getting started with Amazon',name1:'' },
    { id: 6, category: 'recommended', name: 'Cancelling an Item or Order' ,name1:''},
    { id: 6, category: 'recommended', name: 'Amazon Bazaar' ,name1:''},
    { id: 6, category: 'recommended', name: 'Product Troubleshooting - FAQs',name1:'' },
    { id: 6, category: 'recommended', name: 'Self-service video library',name1:'' },
    { id: 1, category: 'shipping', name: 'Track Your Package',name1:'Track your order' },
    { id: 2, category: 'shipping', name: 'Find a Missing Package That Shows As Delivered' ,name1:'Contact Courier'},
    { id: 3, category: 'shipping', name: 'Shipping Speeds and Delivery Charges' ,name1:''},
    { id: 4, category: 'shipping', name: 'Missing Tracking Information' ,name1:'' },
    { id: 5, category: 'shipping', name: 'Shipment is Late',name1:'' },
    { id: 6, category: 'shipping', name: 'Secure Delivery with a One-Time Password,More in Shipping & Delivery' ,name1:''},
    
    { id: 1, category: 'payment', name: 'Pay on Delivery',name1:'Manage your payment methods' },
    { id: 2, category: 'payment', name: 'Find a Missing Package That Shows As Delivered' ,name1:''},
    { id: 3, category: 'payment', name: 'Shipping Speeds and Delivery Charges' ,name1:''},
    { id: 4, category: 'payment', name: 'Missing Tracking Information' ,name1:'' },
    { id: 5, category: 'payment', name: 'Shipment is Late',name1:'' },
    { id: 6, category: 'payment', name: 'Secure Delivery with a One-Time Password,More in Shipping & Delivery' ,name1:''},

    { id: 5, category: 'ordering', name: 'Search and Browse for Items',name1:'Find tracking information and order detail' },
    { id: 6, category: 'ordering', name: 'Ordering with Amazon - FAQ' ,name1:''},
    { id: 1, category: 'ordering', name: 'Cancel Items or Orders',name1:'' },
    { id: 2, category: 'ordering', name: 'About Items Fulfilled by Amazon' ,name1:''},
    { id: 3, category: 'ordering', name: 'About Seller Fulfilled Items' ,name1:''},
    { id: 4, category: 'ordering', name: 'About Gift Orders' ,name1:'' },
    { id: 5, category: 'ordering', name: 'Installations',name1:'' },
    { id: 6, category: 'ordering', name: 'More in Ordering' ,name1:''},

    { id: 3, category: 'managing', name: 'Change Your Account Settings' ,name1:'Manage your Amazon account'},
    { id: 4, category: 'managing', name: 'What is Two-Step Verification?' ,name1:'' },
    { id: 5, category: 'managing', name: 'About Mobile Phone Number Accounts',name1:'' },
    { id: 6, category: 'managing', name: 'More in Managing Your Account' ,name1:''},
  
    { id: 3, category: 'morehelp', name: 'All Devices & Digital Services Help' ,name1:''},
    { id: 4, category: 'morehelp', name: 'Manage Your Content & Devices' ,name1:'' },
    { id: 5, category: 'morehelp', name: 'Ask the Digital and Device Community',name1:'' },
    { id: 6, category: 'morehelp', name: 'Ask the Digital and Device Community (https://in.amazonforum.com)'        ,name1:''},
  
    { id: 3, category: 'othertopics', name: 'Site Features' ,name1:''},
    { id: 4, category: 'othertopics', name: 'Security & Privacy' ,name1:'' },
    { id: 5, category: 'othertopics', name: 'Gifts and Lists',name1:'' },
    { id: 6, category: 'othertopics', name: 'Help for Amazon Sellers'        ,name1:''},
   { id: 3, category: 'othertopics', name: 'Contact Us' ,name1:''},
   
  ];

  filteredData = [...this.data]; // Initially show all data

  filterByCategory(category: string) {
    if (category === 'recommended') {
      this.filteredData = [...this.data];
    } else {
      this.filteredData = this.data.filter(item => item.category === category);
    }
  }

}
