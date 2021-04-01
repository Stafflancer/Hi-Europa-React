module.exports = [
  {
    name: 'dashboard',
    links: [
      {
        name: 'dashboard',
        path: '/admin/dashboard',
        icon: 'ti-server'
      },
      {
        name: 'users',
        path: '/admin/user',
        icon: 'fas fa-users'
      }
    ]
  },
  {
    name: 'Quotation',
    links: [
      {
        name: 'Quotation',
        path: '/admin/quotation',
        icon: 'ti-files'
      }
    ]
  },
  {
    name: 'Contract',
    links: [
      {
        name: 'Contract',
        path: '/admin/contract',
        icon: 'ti-files'
      }
    ]
  },
  {
    name: 'Resiliation',
    links: [
      {
        name: 'Resiliation',
        path: '/admin/resiliation',
        icon: 'ti-files'
      }
    ]
  },
  {
    name: 'Services',
    links: [
      {
        name: 'Services',
        path: '/admin/Services',
        show: false,
        icon: 'ti-server',
        subMenu: [
          {
            name: 'Wakam',
            path: '/admin/wakam',
            icon: ''
          },
          {
            name: 'Ima',
            path: '/admin/ima',
            icon: ''
          }
        ]
      }
    ]
  },
  {
    name: 'settings',
    links: [
      {
        name: 'My Profile',
        path: '/admin/my-profile',
        icon: 'ti-user'
      }
    ]
  }
]
