# -*- coding: utf-8 -*-
# Part of BrowseInfo. See LICENSE file for full copyright and licensing details.
{
    "name" : "POS Backend Margin With Margin Analysis",
    "version" : "11.0.0.1",
    "depends" : ['base','point_of_sale'],
    "author": "BrowseInfo",
    "summary": "Margin calculation on POS backend Order based on product and visible on analysis report",
    "description": """
	BrowseInfo developed a new odoo/OpenERP module apps.
	This module use for calculate margin on product, margion on pos, margin on point of sale. Shows total margin on POS orders.
	also shows margin on POS order line. Calculate margin on percentage and fixed.Margin Analysis, Margin on Product, POS and Invoice
    product margin, pos margin, pos order margin, pos backend margin. 
    """,
    "price": 19,
    "category": "Point of Sales",
    "currency": "EUR",
    "website" : "www.browseinfo.in",
    "data" :[
             "views/pos_view.xml",
    ],
    'qweb':[
    ],
    "auto_install": False,
    "installable": True,
    "images":['static/description/Banner.png'],
}
# vim:expandtab:smartindent:tabstop=4:softtabstop=4:shiftwidth=4:
