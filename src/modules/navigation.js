module.exports = [
  {
    name: 'dashboard',
    links: [
      {
        name: 'dashboard',
        path: '/admin/dashboard',
        icon: 'ti-server'
      }
    ]
  },
  {
    name: 'MRH',
    links: [
      {
        name: 'Utilisateurs',
        path: '/admin/user',
        icon: 'fas fa-users'
      },
      {
        name: 'Devis',
        path: '/admin/quotation',
        icon: 'ti-files'
      },
      {
        name: 'Contrats',
        path: '/admin/contract',
        icon: 'ti-files'
      },
      {
        name: 'Résiliation',
        path: '/admin/resiliation',
        icon: 'ti-files'
      },
      {
        name: 'Residents',
        path: '/admin/resident',
        icon: 'fas fa-users'
      },
      {
        name: 'Prospect',
        path: '/admin/prospect',
        icon: 'ti-files'
      }
    ]
  },
  {
    name: 'Dépannage d’urgence',
    links: [
      {
        name: 'Utilisateurs',
        path: '/admin/ima-user',
        icon: 'ti-user'
      },
      {
        name: 'Devis',
        path: '/admin/ima-quotation',
        icon: 'ti-files'
      },
      {
        name: 'Intervention',
        path: '/admin/intervention',
        icon: 'ti-files'
      },
    ]
  },
  {
    name: 'Configuration',
    links: [
      {
        name: 'Admin',
        path: '/admin/admin',
        icon: 'fas fa-users',
        isAdmin: true
      },
      {
        name: 'Configuration',
        path: '/admin/my-profile',
        icon: 'ti-user'
      }
    ]
  }
]
