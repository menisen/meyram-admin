<template>
  <div class="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-24">
    <h6 class="fw-semibold mb-0">Basic Table</h6>
    <ul class="d-flex align-items-center gap-2">
      <li class="fw-medium">
        <a href="index.html" class="d-flex align-items-center gap-1 hover-text-primary">
          <Icon icon="solar:home-smile-angle-outline" class="icon text-lg"></Icon>
          Dashboard
        </a>
      </li>
      <li>-</li>
      <li class="fw-medium">Basic Table</li>
    </ul>
  </div>
  <div class="row gy-4">
    <div class="col-lg-6">
      <div class="card h-100">
        <div class="card-header">
          <h5 class="card-title mb-0">Default Table</h5>
        </div>
        <div class="card-body">
          <div class="table-responsive">

            <iTable
              :headers="tableData.headers"
              :items="tableData.items"
            >

            </iTable>
          </div>
        </div>
      </div><!-- card end -->
    </div>
    <div class="col-lg">
      <div class="card h-100">
        <div class="card-header">
          <h5 class="card-title mb-0">
            Table
          </h5>
        </div>
        <div class="card-body">
          <div class="table-responsive">

            <table class="table bordered-table mb-0 dataTable" id="dataTable" data-page-length="10"
                   aria-describedby="dataTable_info" style="width: 1067px;">
              <colgroup>
                <col data-dt-column="0" style="width: 98.1094px;">
                <col data-dt-column="1" style="width: 114.5px;">
                <col data-dt-column="2" style="width: 273.438px;">
                <col data-dt-column="3" style="width: 163.781px;">
                <col data-dt-column="4" style="width: 109.039px;">
                <col data-dt-column="5" style="width: 152.812px;">
                <col data-dt-column="6" style="width: 155.32px;">
              </colgroup>
              <thead>
              <tr role="row">
                <th scope="col" data-dt-column="0" rowspan="1" colspan="1"
                    class="dt-orderable-asc dt-orderable-desc dt-ordering-asc" aria-sort="ascending" aria-label="



                    S.L


              : Activate to invert sorting" tabindex="0"><span class="dt-column-title" role="button">
                <div class="form-check style-check d-flex align-items-center">
                  <input class="form-check-input" type="checkbox">
                  <label class="form-check-label">
                    S.L
                  </label>
                </div>
              </span><span class="dt-column-order"></span></th>
                <th scope="col" data-dt-column="1" rowspan="1" colspan="1" class="dt-orderable-asc dt-orderable-desc"
                    aria-label="Invoice: Activate to sort" tabindex="0"><span class="dt-column-title" role="button">Invoice</span><span
                  class="dt-column-order"></span></th>
                <th scope="col" data-dt-column="2" rowspan="1" colspan="1" class="dt-orderable-asc dt-orderable-desc"
                    aria-label="Name: Activate to sort" tabindex="0"><span class="dt-column-title"
                                                                           role="button">Name</span><span
                  class="dt-column-order"></span></th>
                <th scope="col" data-dt-column="3" rowspan="1" colspan="1" class="dt-orderable-asc dt-orderable-desc"
                    aria-label="Issued Date: Activate to sort" tabindex="0"><span class="dt-column-title" role="button">Issued Date</span><span
                  class="dt-column-order"></span></th>
                <th scope="col" data-dt-column="4" rowspan="1" colspan="1"
                    class="dt-type-numeric dt-orderable-asc dt-orderable-desc" aria-label="Amount: Activate to sort"
                    tabindex="0"><span class="dt-column-title" role="button">Amount</span><span
                  class="dt-column-order"></span></th>
                <th scope="col" data-dt-column="5" rowspan="1" colspan="1" class="dt-orderable-asc dt-orderable-desc"
                    aria-label="Status: Activate to sort" tabindex="0"><span class="dt-column-title" role="button">Status</span><span
                  class="dt-column-order"></span></th>
                <th scope="col" data-dt-column="6" rowspan="1" colspan="1" class="dt-orderable-asc dt-orderable-desc"
                    aria-label="Action: Activate to sort" tabindex="0"><span class="dt-column-title" role="button">Action</span><span
                  class="dt-column-order"></span></th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td class="sorting_1">
                  <div class="form-check style-check d-flex align-items-center">
                    <input class="form-check-input" type="checkbox">
                    <label class="form-check-label">
                      01
                    </label>
                  </div>
                </td>
                <td><a href="javascript:void(0)" class="text-primary-600">#526534</a></td>
                <td>
                  <div class="d-flex align-items-center">
                    <img src="https://wowdash.wowtheme7.com/bundlelive/demo/assets/images/user-list/user-list1.png"
                         alt="" class="flex-shrink-0 me-12 radius-8">
                    <h6 class="text-md mb-0 fw-medium flex-grow-1">Kathryn Murphy</h6>
                  </div>
                </td>
                <td>25 Jan 2024</td>
                <td class="dt-type-numeric">$200.00</td>
                <td><span
                  class="bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm">Paid</span></td>
                <td>
                  <a href="javascript:void(0)"
                     class="w-32-px h-32-px bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center">
                    <Icon icon="iconamoon:eye-light"></Icon>
                  </a>
                  <a href="javascript:void(0)"
                     class="w-32-px h-32-px bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center">
                    <Icon icon="lucide:edit"></Icon>
                  </a>
                  <a href="javascript:void(0)"
                     class="w-32-px h-32-px bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center">
                    <Icon icon="mingcute:delete-2-line"></Icon>
                  </a>
                </td>
              </tr>
              <tr>
                <td class="sorting_1">
                  <div class="form-check style-check d-flex align-items-center">
                    <input class="form-check-input" type="checkbox">
                    <label class="form-check-label">
                      01
                    </label>
                  </div>
                </td>
                <td><a href="javascript:void(0)" class="text-primary-600">#526534</a></td>
                <td>
                  <div class="d-flex align-items-center">
                    <img src="https://wowdash.wowtheme7.com/bundlelive/demo/assets/images/user-list/user-list1.png"
                         alt="" class="flex-shrink-0 me-12 radius-8">
                    <h6 class="text-md mb-0 fw-medium flex-grow-1">Kathryn Murphy</h6>
                  </div>
                </td>
                <td>25 Jan 2024</td>
                <td class="dt-type-numeric">$200.00</td>
                <td><span
                  class="bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm">Paid</span></td>
                <td>
                  <a href="javascript:void(0)"
                     class="w-32-px h-32-px bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center">
                    <Icon icon="iconamoon:eye-light"></Icon>
                  </a>
                  <a href="javascript:void(0)"
                     class="w-32-px h-32-px bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center">
                    <Icon icon="lucide:edit"></Icon>
                  </a>
                  <a href="javascript:void(0)"
                     class="w-32-px h-32-px bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center">
                    <Icon icon="mingcute:delete-2-line"></Icon>
                  </a>
                </td>
              </tr>
              <tr>
                <td class="sorting_1">
                  <div class="form-check style-check d-flex align-items-center">
                    <input class="form-check-input" type="checkbox">
                    <label class="form-check-label">
                      02
                    </label>
                  </div>
                </td>
                <td><a href="javascript:void(0)" class="text-primary-600">#696589</a></td>
                <td>
                  <div class="d-flex align-items-center">
                    <img src="https://wowdash.wowtheme7.com/bundlelive/demo/assets/images/user-list/user-list2.png"
                         alt="" class="flex-shrink-0 me-12 radius-8">
                    <h6 class="text-md mb-0 fw-medium flex-grow-1">Annette Black</h6>
                  </div>
                </td>
                <td>25 Jan 2024</td>
                <td class="dt-type-numeric">$200.00</td>
                <td><span
                  class="bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm">Paid</span></td>
                <td>
                  <a href="javascript:void(0)"
                     class="w-32-px h-32-px bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center">
                    <Icon icon="iconamoon:eye-light"></Icon>
                  </a>
                  <a href="javascript:void(0)"
                     class="w-32-px h-32-px bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center">
                    <Icon icon="lucide:edit"></Icon>
                  </a>
                  <a href="javascript:void(0)"
                     class="w-32-px h-32-px bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center">
                    <Icon icon="mingcute:delete-2-line"></Icon>
                  </a>
                </td>
              </tr>
              <tr>
                <td class="sorting_1">
                  <div class="form-check style-check d-flex align-items-center">
                    <input class="form-check-input" type="checkbox">
                    <label class="form-check-label">
                      02
                    </label>
                  </div>
                </td>
                <td><a href="javascript:void(0)" class="text-primary-600">#696589</a></td>
                <td>
                  <div class="d-flex align-items-center">
                    <img src="https://wowdash.wowtheme7.com/bundlelive/demo/assets/images/user-list/user-list2.png"
                         alt="" class="flex-shrink-0 me-12 radius-8">
                    <h6 class="text-md mb-0 fw-medium flex-grow-1">Annette Black</h6>
                  </div>
                </td>
                <td>25 Jan 2024</td>
                <td class="dt-type-numeric">$200.00</td>
                <td><span
                  class="bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm">Paid</span></td>
                <td>
                  <a href="javascript:void(0)"
                     class="w-32-px h-32-px bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center">
                    <Icon icon="iconamoon:eye-light"></Icon>
                  </a>
                  <a href="javascript:void(0)"
                     class="w-32-px h-32-px bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center">
                    <Icon icon="lucide:edit"></Icon>
                  </a>
                  <a href="javascript:void(0)"
                     class="w-32-px h-32-px bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center">
                    <Icon icon="mingcute:delete-2-line"></Icon>
                  </a>
                </td>
              </tr>
              <tr>
                <td class="sorting_1">
                  <div class="form-check style-check d-flex align-items-center">
                    <input class="form-check-input" type="checkbox">
                    <label class="form-check-label">
                      03
                    </label>
                  </div>
                </td>
                <td><a href="javascript:void(0)" class="text-primary-600">#256584</a></td>
                <td>
                  <div class="d-flex align-items-center">
                    <img src="https://wowdash.wowtheme7.com/bundlelive/demo/assets/images/user-list/user-list3.png"
                         alt="" class="flex-shrink-0 me-12 radius-8">
                    <h6 class="text-md mb-0 fw-medium flex-grow-1">Ronald Richards</h6>
                  </div>
                </td>
                <td>10 Feb 2024</td>
                <td class="dt-type-numeric">$200.00</td>
                <td><span
                  class="bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm">Paid</span></td>
                <td>
                  <a href="javascript:void(0)"
                     class="w-32-px h-32-px bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center">
                    <Icon icon="iconamoon:eye-light"></Icon>
                  </a>
                  <a href="javascript:void(0)"
                     class="w-32-px h-32-px bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center">
                    <Icon icon="lucide:edit"></Icon>
                  </a>
                  <a href="javascript:void(0)"
                     class="w-32-px h-32-px bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center">
                    <Icon icon="mingcute:delete-2-line"></Icon>
                  </a>
                </td>
              </tr>
              <tr>
                <td class="sorting_1">
                  <div class="form-check style-check d-flex align-items-center">
                    <input class="form-check-input" type="checkbox">
                    <label class="form-check-label">
                      03
                    </label>
                  </div>
                </td>
                <td><a href="javascript:void(0)" class="text-primary-600">#256584</a></td>
                <td>
                  <div class="d-flex align-items-center">
                    <img src="https://wowdash.wowtheme7.com/bundlelive/demo/assets/images/user-list/user-list3.png"
                         alt="" class="flex-shrink-0 me-12 radius-8">
                    <h6 class="text-md mb-0 fw-medium flex-grow-1">Ronald Richards</h6>
                  </div>
                </td>
                <td>10 Feb 2024</td>
                <td class="dt-type-numeric">$200.00</td>
                <td><span
                  class="bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm">Paid</span></td>
                <td>
                  <a href="javascript:void(0)"
                     class="w-32-px h-32-px bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center">
                    <Icon icon="iconamoon:eye-light"></Icon>
                  </a>
                  <a href="javascript:void(0)"
                     class="w-32-px h-32-px bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center">
                    <Icon icon="lucide:edit"></Icon>
                  </a>
                  <a href="javascript:void(0)"
                     class="w-32-px h-32-px bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center">
                    <Icon icon="mingcute:delete-2-line"></Icon>
                  </a>
                </td>
              </tr>
              <tr>
                <td class="sorting_1">
                  <div class="form-check style-check d-flex align-items-center">
                    <input class="form-check-input" type="checkbox">
                    <label class="form-check-label">
                      04
                    </label>
                  </div>
                </td>
                <td><a href="javascript:void(0)" class="text-primary-600">#526587</a></td>
                <td>
                  <div class="d-flex align-items-center">
                    <img src="https://wowdash.wowtheme7.com/bundlelive/demo/assets/images/user-list/user-list4.png"
                         alt="" class="flex-shrink-0 me-12 radius-8">
                    <h6 class="text-md mb-0 fw-medium flex-grow-1">Eleanor Pena</h6>
                  </div>
                </td>
                <td>10 Feb 2024</td>
                <td class="dt-type-numeric">$150.00</td>
                <td><span
                  class="bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm">Paid</span></td>
                <td>
                  <a href="javascript:void(0)"
                     class="w-32-px h-32-px bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center">
                    <Icon icon="iconamoon:eye-light"></Icon>
                  </a>
                  <a href="javascript:void(0)"
                     class="w-32-px h-32-px bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center">
                    <Icon icon="lucide:edit"></Icon>
                  </a>
                  <a href="javascript:void(0)"
                     class="w-32-px h-32-px bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center">
                    <Icon icon="mingcute:delete-2-line"></Icon>
                  </a>
                </td>
              </tr>
              <tr>
                <td class="sorting_1">
                  <div class="form-check style-check d-flex align-items-center">
                    <input class="form-check-input" type="checkbox">
                    <label class="form-check-label">
                      04
                    </label>
                  </div>
                </td>
                <td><a href="javascript:void(0)" class="text-primary-600">#526587</a></td>
                <td>
                  <div class="d-flex align-items-center">
                    <img src="https://wowdash.wowtheme7.com/bundlelive/demo/assets/images/user-list/user-list4.png"
                         alt="" class="flex-shrink-0 me-12 radius-8">
                    <h6 class="text-md mb-0 fw-medium flex-grow-1">Eleanor Pena</h6>
                  </div>
                </td>
                <td>10 Feb 2024</td>
                <td class="dt-type-numeric">$150.00</td>
                <td><span
                  class="bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm">Paid</span></td>
                <td>
                  <a href="javascript:void(0)"
                     class="w-32-px h-32-px bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center">
                    <Icon icon="iconamoon:eye-light"></Icon>
                  </a>
                  <a href="javascript:void(0)"
                     class="w-32-px h-32-px bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center">
                    <Icon icon="lucide:edit"></Icon>
                  </a>
                  <a href="javascript:void(0)"
                     class="w-32-px h-32-px bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center">
                    <Icon icon="mingcute:delete-2-line"></Icon>
                  </a>
                </td>
              </tr>
              <tr>
                <td class="sorting_1">
                  <div class="form-check style-check d-flex align-items-center">
                    <input class="form-check-input" type="checkbox">
                    <label class="form-check-label">
                      05
                    </label>
                  </div>
                </td>
                <td><a href="javascript:void(0)" class="text-primary-600">#105986</a></td>
                <td>
                  <div class="d-flex align-items-center">
                    <img src="https://wowdash.wowtheme7.com/bundlelive/demo/assets/images/user-list/user-list5.png"
                         alt="" class="flex-shrink-0 me-12 radius-8">
                    <h6 class="text-md mb-0 fw-medium flex-grow-1">Leslie Alexander</h6>
                  </div>
                </td>
                <td>15 March 2024</td>
                <td class="dt-type-numeric">$150.00</td>
                <td><span
                  class="bg-warning-focus text-warning-main px-24 py-4 rounded-pill fw-medium text-sm">Pending</span>
                </td>
                <td>
                  <a href="javascript:void(0)"
                     class="w-32-px h-32-px bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center">
                    <Icon icon="iconamoon:eye-light"></Icon>
                  </a>
                  <a href="javascript:void(0)"
                     class="w-32-px h-32-px bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center">
                    <Icon icon="lucide:edit"></Icon>
                  </a>
                  <a href="javascript:void(0)"
                     class="w-32-px h-32-px bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center">
                    <Icon icon="mingcute:delete-2-line"></Icon>
                  </a>
                </td>
              </tr>
              <tr>
                <td class="sorting_1">
                  <div class="form-check style-check d-flex align-items-center">
                    <input class="form-check-input" type="checkbox">
                    <label class="form-check-label">
                      05
                    </label>
                  </div>
                </td>
                <td><a href="javascript:void(0)" class="text-primary-600">#105986</a></td>
                <td>
                  <div class="d-flex align-items-center">
                    <img src="https://wowdash.wowtheme7.com/bundlelive/demo/assets/images/user-list/user-list5.png"
                         alt="" class="flex-shrink-0 me-12 radius-8">
                    <h6 class="text-md mb-0 fw-medium flex-grow-1">Leslie Alexander</h6>
                  </div>
                </td>
                <td>15 March 2024</td>
                <td class="dt-type-numeric">$150.00</td>
                <td><span
                  class="bg-warning-focus text-warning-main px-24 py-4 rounded-pill fw-medium text-sm">Pending</span>
                </td>
                <td>
                  <a href="javascript:void(0)"
                     class="w-32-px h-32-px bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center">
                    <Icon icon="iconamoon:eye-light"></Icon>
                  </a>
                  <a href="javascript:void(0)"
                     class="w-32-px h-32-px bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center">
                    <Icon icon="lucide:edit"></Icon>
                  </a>
                  <a href="javascript:void(0)"
                     class="w-32-px h-32-px bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center">
                    <Icon icon="mingcute:delete-2-line"></Icon>
                  </a>
                </td>
              </tr>
              </tbody>
              <tfoot></tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import iTable from '../../ui/iTable.vue'
import {ref} from 'vue'
import { Icon } from '@iconify/vue'

const tableData = ref({
  headers: [
    {
      key: 'id',
      text: 'S.L'
    },
    {
      key: 'invoice',
      text: 'Invoice'
    },
    {
      key: 'name',
      text: 'Name'
    },
    {
      key: 'date',
      text: 'Issued Date'
    },
    {
      key: 'amount',
      text: 'Amount'
    },
  ],
  items: [
    {
      id: '526534',
      invoice: '#526534',
      name: 'Kathryn Murphy',
      date: '25 Jan 2024',
      amount: '$200.00'
    }
  ]
})
</script>

<style scoped>

</style>
