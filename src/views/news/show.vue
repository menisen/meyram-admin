<template>
  <div class="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-24">
    <h6 class="fw-semibold mb-0">Кино</h6>
    <ul class="d-flex align-items-center gap-2">
      <li class="fw-medium">
        <router-link to="/" class="d-flex align-items-center gap-1 hover-text-primary">
          <Icon icon="solar:home-smile-angle-outline" class="icon text-lg"></Icon>
          Главная
        </router-link>
      </li>
      <li>-</li>
      <li class="fw-medium">Кино</li>
    </ul>
  </div>
  <div class="row gy-4">
    <div class="col-lg-12">
      <div class="card h-100">
        <div class="card-body p-24">
          <ul class="nav border-gradient-tab nav-pills mb-20 d-inline-flex overflow-scroll flex-nowrap w-100" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                :class="{active: route.params.name === 'show'}"
                class="nav-link d-flex align-items-center px-24"
                id="pills-show-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-edit-profile"
                type="button"
                role="tab"
                aria-controls="pills-edit-profile"
                aria-selected="true"
                @click="openTab('show')"
              >
                Участники
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                :class="{active: route.params.name === 'request'}"
                class="nav-link d-flex align-items-center px-24"
                id="pills-request-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-edit-profile"
                type="button"
                role="tab"
                aria-controls="pills-edit-profile"
                aria-selected="true"
                @click="openTab('request')"
              >
                Заявки
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                :class="{active: route.params.name === 'edit'}"
                class="nav-link d-flex align-items-center px-24"
                id="pills-edit-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-edit-profile"
                type="button"
                role="tab"
                aria-controls="pills-edit-profile"
                aria-selected="true"
                @click="openTab('edit')"
              >
                Редактировать
              </button>
            </li>
          </ul>

          <div v-if="formData.movies" class="tab-content" id="pills-tabContent">
            <div :class="{active: route.params.name === 'edit', show: route.params.name === 'edit'}"
                 class="tab-pane fade" id="pills-edit-profile" role="tabpanel" aria-labelledby="pills-edit-profile-tab"
                 tabindex="0">
              <!-- Upload Image End -->
              <form @submit.prevent="save()">
                <div class="row">
                  <div class="col-md-6 col-sm-12 mb-10">
                    <label class="form-label fw-semibold text-primary-light text-sm mb-8">Название</label>
                    <input v-model="formData.movies.title" type="text" class="form-control radius-8"
                           placeholder="Введите название">
                  </div>
                  <div class="col-md-6 col-sm-12 mb-10">
                    <label for="leader_id" class="form-label fw-semibold text-primary-light text-sm mb-8">Автор<span
                      class="text-danger-600">*</span></label>
                    <input v-model="formData.movies.author" type="text" class="form-control radius-8"
                           placeholder="Введите автора">
                    <!--                    <select v-model="formData.movies.curator_id" class="form-control radius-8 form-select" id="leader_id">-->
                    <!--                      <option :value="null">Не выбран</option>-->
                    <!--                      <option v-for="curator in curators" :key="curator.id" :value="curator.id">{{ curator.full_name }}</option>-->
                    <!--                    </select>-->
                  </div>
                  <!--                  <div class="col-6 mb-10">-->
                  <!--                    <label class="form-label fw-semibold text-primary-light text-sm mb-8">Максимальное число</label>-->
                  <!--                    <input v-model="formData.movies.participants_count" type="number" class="form-control radius-8" placeholder="Введите число">-->
                  <!--                  </div>-->
                  <div class="col-md-6 col-sm-12 mb-10">
                    <label for="genre" class="form-label fw-semibold text-primary-light text-sm mb-8">Жанр<span
                      class="text-danger-600">*</span></label>
                    <select required v-model="formData.movies.genre" class="form-control radius-8 form-select"
                            id="genre">
                      <option :value="null" disabled>Выберите жанр</option>
                      <option value="Историческая драма">Историческая драма</option>
                      <option value="Драма">Драма</option>
                      <option value="Комедия">Комедия</option>
                      <option value="Боевик">Боевик</option>
                      <option value="Триллер">Триллер</option>
                      <option value="Фантастика">Фантастика</option>
                      <option value="Хоррор">Хоррор</option>
                      <option value="Детектив">Детектив</option>
                      <option value="Мелодрама">Мелодрама</option>
                      <option value="Вестерн">Вестерн</option>
                    </select>
                  </div>
                  <!--                  <div class="col-6 mb-10">-->
                  <!--                    <label class="form-label fw-semibold text-primary-light text-sm mb-8">Ссылка обложку</label>-->
                  <!--                    <input v-model="formData.movies.link_url" type="text" class="form-control radius-8" placeholder="Введите ссылку">-->
                  <!--                  </div>-->
                  <div class="col-md-6 col-sm-12 mb-10">
                    <label for="genre" class="form-label fw-semibold text-primary-light text-sm mb-8">Тип<span
                      class="text-danger-600">*</span></label>
                    <select required v-model="formData.movies.movie_type" class="form-control radius-8 form-select"
                            id="genre">
                      <option :value="null" disabled>Выберите тип</option>
                      <option value="film">Фильм</option>
                      <option value="serial">Сериал</option>
                      <option value="web-serial">Веб сериал</option>
                    </select>
                  </div>
                  <div class="col-md-6 col-sm-12 mb-10">
                    <label class="form-label fw-semibold text-primary-light text-sm mb-8">Премьера</label>
                    <input v-model="formData.movies.premiere_datetime" type="date" class="form-control radius-8"
                           placeholder="Введите ссылку">
                  </div>
                  <div class="col-md-6 col-sm-12 mb-10">
                    <label class="form-label fw-semibold text-primary-light text-sm mb-8">Город</label>
                    <select required v-model="formData.movies.city" class="form-control radius-8 form-select"
                            id="genre">
                      <option :value="null" disabled>Выберите город</option>
                      <option v-for="city in cities" :key="city" :value="city">{{ city }}</option>
                    </select>
                  </div>
                  <div class="col-md-6 col-sm-12 mb-10 overflow-auto">
                      <label class="form-label fw-semibold text-primary-light text-sm mb-8">Изображение трейлера</label>
                      <input accept="image/*" @change="fileChangeHandler($event, 'banner')" type="file"
                             class="form-control w-auto form-control-lg" id="basic-upload">
                      <!--                    <input v-model="formData.movies.banner_url" type="text" class="form-control radius-8" placeholder="Введите ссылку">-->
                  </div>
                  <div class="col-md-6 col-sm-12">
                    <a class="cursor-pointer" :href="formData.movies.banner_url" target="_blank">
                      <img class="w-80-px h-80-px radius-8 object-fit-cover" :src="formData.movies.banner_url" alt="">
                    </a>
                  </div>
                  <div class="col-12 mb-10">
                    <div>
                      <label class="form-label fw-semibold text-primary-light text-sm mb-8">Трейлер</label>
                      <input accept="video/*" @change="fileChangeHandler($event, 'trailer')" type="file"
                             class="form-control w-auto form-control-lg" id="basic-upload">
                      <!--                    <input v-model="formData.movies.banner_url" type="text" class="form-control radius-8" placeholder="Введите ссылку">-->
                    </div>
                    <div class="mt-12">
                      <a class="cursor-pointer" :href="formData.movies.trailer_url" target="_blank">
                        <video class="w-200-px h-200-px radius-8 object-fit-cover" :src="formData.movies.trailer_url"
                               controls></video>
                      </a>
                    </div>
                  </div>
                  <div class="col-md-6 col-sm-12 mb-10 overflow-auto">
                    <label class="form-label fw-semibold text-primary-light text-sm mb-8">Аватар автора</label>
                    <input accept="image/*" @change="fileChangeHandler($event, 'author_avatar')" type="file"
                           class="form-control w-auto form-control-lg" id="basic-upload">
                    <!--                    <input v-model="formData.movies.banner_url" type="text" class="form-control radius-8" placeholder="Введите ссылку">-->
                  </div>
                  <div class="col-md-6 col-sm-12">
                    <a class="cursor-pointer" :href="formData.movies.author_avatar_url" target="_blank">
                      <img class="w-80-px h-80-px radius-8 object-fit-cover" :src="formData.movies.author_avatar_url"
                           alt="">
                    </a>
                  </div>
                  <!--                  <div class="col-6 mb-10">-->
                  <!--                    <label class="form-label fw-semibold text-primary-light text-sm mb-8">Ссылка на трейлер</label>-->
                  <!--                    <input v-model="formData.movies.trailer_url" type="text" class="form-control radius-8" placeholder="Введите ссылку">-->
                  <!--                  </div>-->
                  <div class="col-12 mb-10">
                    <label for="desc" class="form-label fw-semibold text-primary-light text-sm mb-8">Описание</label>
                    <textarea v-model="formData.movies.description" class="form-control" id="desc" rows="4" cols="50"
                              placeholder="Описание"></textarea>
                  </div>
                  <div class="d-flex align-items-center justify-content-between mb-16">
                    <h6 class="text-md text-primary-light mb-0">Персонажи</h6>
<!--                    <button v-if="!formData.movies.roles_distribution?.length" type="button" @click="addRoles()"-->
<!--                            class="btn btn-sm btn-primary border border-primary-600 text-md radius-8">Добавить-->
<!--                      персонажей-->
<!--                    </button>-->
                  </div>
                  <template v-if="formData.movies.roles_distribution">
                    <template v-for="(role) in Object.entries(formData.movies.roles_distribution)">
                      <div class="col-12 mt-10 d-flex align-items justify-content-between">
                        <label class="form-label fw-semibold text-primary-light text-sm mb-0">{{
                            roles[role[0]]
                          }}</label>
                        <button type="button" @click="addRole(role)"
                                class="btn btn-sm btn-primary border border-primary-600 text-md radius-8">Добавить роль
                        </button>
                      </div>
                      <template v-for="(item, index) in role[1]" :key="index">
                        <div class="row">
                          <div class="col-md-3 col-sm-12 mt-10">
                            <label class="form-label fw-semibold text-primary-light text-sm mb-8">Персонаж</label>
                            <input v-model="item.role_name" type="text" class="form-control radius-8"
                                   placeholder="Введите роль">
                          </div>
                          <div class="col-md-3 col-sm-12 mt-10">
                            <label class="form-label fw-semibold text-primary-light text-sm mb-8">Названия роли</label>
                            <input v-model="item.character_description" type="text" class="form-control radius-8"
                                   placeholder="Введите роль">
                          </div>
                          <div class="col-md-3 col-sm-12 mt-10 d-flex flex-column justify-content-end">
                            <multiselect
                              placeholder="Все"
                              deselectLabel="Нажмите чтобы удалить"
                              selectedLabel="Выбран"
                              selectLabel="Нажмите чтобы выбрать"
                              v-model="item.user"
                              :options="children"
                              label="full_name"
                            ></multiselect>
                          </div>
                          <div class="col-2 d-flex flex-column justify-content-end">
                            <label class="form-label fw-semibold text-primary-light text-sm mb-8"></label>
                            <a
                              @click="removeRole(role, index)"
                              class="w-44-px h-44-px bg-danger-focus text-danger-main d-inline-flex align-items-center justify-content-center">
                              <Icon icon="mingcute:delete-2-line"/>
                            </a>
                          </div>
                        </div>
                        <div v-if="item.user" class="row mb-10 mt-6">
                          <a :href="`/children/${item.user.id}/show`" target="_blank" class="d-flex align-items-center gap-2 cursor-pointer">
                            <img :src="`https://meyram.kz/${item.user?.avatar_url}`" alt="" class="w-32-px h-32-px rounded-circle object-fit-cover flex-shrink-0">
                            <div class="flex-grow-1 d-inline-flex flex-column">
                              <h6 class="text-sm mb-0">{{ item.user.full_name }}</h6>
                              <span class="text-xs text-secondary-light">{{ item.user.phone }}</span>
                            </div>
                          </a>
<!--                          <div class="col-4">-->
<!--                            <label class="form-label fw-semibold text-primary-light text-sm mb-4">Имя</label>-->
<!--                            <input disabled :value="item.user.full_name" type="text" class="form-control radius-8" placeholder="Введите название">-->
<!--                          </div>-->
<!--                          <div class="col-4">-->
<!--                            <label class="form-label fw-semibold text-primary-light text-sm mb-8">Название</label>-->
<!--                            <input disabled v-model="item.user" type="text" class="form-control radius-8" placeholder="Введите название">-->
<!--                          </div>-->
<!--                          <div class="col-4">-->
<!--                            <label class="form-label fw-semibold text-primary-light text-sm mb-8">Название</label>-->
<!--                            <input disabled v-model="item.user" type="text" class="form-control radius-8" placeholder="Введите название">-->
<!--                          </div>-->
                        </div>
                      </template>
                    </template>
                  </template>
                  <!--                  <div class="col-12 mt-10 d-flex align-items justify-content-between">-->
                  <!--                    <label class="form-label fw-semibold text-primary-light text-sm mb-0">Экстра роль</label>-->
                  <!--                    <button class="btn btn-sm btn-primary border border-primary-600 text-md radius-8">Добавить роль</button>-->
                  <!--                  </div>-->
                  <!--                  <template v-for="(item, index) in formData.movies.roles_distribution.extra" :key="index">-->
                  <!--                    <div class="col-6 mb-10">-->
                  <!--                      <label class="form-label fw-semibold text-primary-light text-sm mb-8">Роль</label>-->
                  <!--                      <input v-model="item.role" type="text" class="form-control radius-8" placeholder="Введите ссылку">-->
                  <!--                    </div>-->
                  <!--                    <div class="col-6 mb-10">-->
                  <!--                      <label class="form-label fw-semibold text-primary-light text-sm mb-8">Названия роли</label>-->
                  <!--                      <input v-model="item.name" type="text" class="form-control radius-8" placeholder="Введите ссылку">-->
                  <!--                    </div>-->
                  <!--                  </template>-->
                  <!--                  <div class="col-12 mt-10 d-flex align-items justify-content-between">-->
                  <!--                    <label class="form-label fw-semibold text-primary-light text-sm mb-0">Саппорт роль</label>-->
                  <!--                    <button class="btn btn-sm btn-primary border border-primary-600 text-md radius-8">Добавить роль</button>-->
                  <!--                  </div>-->
                  <!--                  <template v-for="(item, index) in formData.movies.roles_distribution.supporting" :key="index">-->
                  <!--                    <div class="col-6 mb-10">-->
                  <!--                      <label class="form-label fw-semibold text-primary-light text-sm mb-8">Роль</label>-->
                  <!--                      <input v-model="item.role" type="text" class="form-control radius-8" placeholder="Введите ссылку">-->
                  <!--                    </div>-->
                  <!--                    <div class="col-6 mb-10">-->
                  <!--                      <label class="form-label fw-semibold text-primary-light text-sm mb-8">Названия роли</label>-->
                  <!--                      <input v-model="item.name" type="text" class="form-control radius-8" placeholder="Введите ссылку">-->
                  <!--                    </div>-->
                  <!--                  </template>-->
                </div>
                <div class="row">
                  <div class="col-lg-3 col-sm-12 mt-20">
                    <button @click="cancel()" type="button" class="border border-danger-600 bg-hover-danger-200 text-danger-600 text-md py-11 radius-8 w-100 text-center">
                      Отмена
                    </button>
                  </div>
                  <div class="col-lg-3 col-sm-12 mt-20">
                    <button @click="remove()" type="button" class="btn btn-danger border border-danger-600 bg-hover-danger-200 text-md px-56 py-11 w-100 text-center radius-8">
                      Удалить
                    </button>
                  </div>
                  <div class="col-lg-3 col-sm-12 mt-20">
                    <button type="submit" class="btn btn-primary border border-primary-600 text-md py-12 radius-8 w-100">
                      Сохранить
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div :class="{active: route.params.name === 'show', show: route.params.name === 'show'}"
                 class="tab-pane fade" id="pills-show-profile" role="tabpanel" aria-labelledby="pills-edit-profile-tab"
                 tabindex="1">

              <h6 class="text-md text-primary-light mb-16">Персонажи</h6>
              <div class="table-responsive scroll-sm">
                <div class="dt-layout-cell ">
                  <table
                    class="table bordered-table mb-0 dataTable"
                    id="dataTable"
                    data-page-length="10"
                    aria-describedby="dataTable_info"
                  >
                    <colgroup>
                      <col data-dt-column="0" style="width: 70px;">
                      <col data-dt-column="0" style="width: 150px;">
                      <col data-dt-column="0" style="width: 150px;">
                      <col data-dt-column="0" style="width: 150px;">
                      <col data-dt-column="0" style="width: 200px;">
                    </colgroup>
                    <thead>
                    <tr role="row">
                      <th
                        scope="col"
                        data-dt-column="0"
                        rowspan="1"
                        colspan="1"
                        class="dt-orderable-asc dt-orderable-desc"
                        aria-sort="ascending"
                        aria-label="S.L: Activate to invert sorting"
                        tabindex="0"
                      >
                        <span class="dt-column-title" role="button">
                          <div class="form-check style-check d-flex align-items-center">
                            <label class="form-check-label">
                              ID
                            </label>
                          </div>
                        </span>
                        <span class="dt-column-order"></span>
                      </th>
                      <th
                        scope="col"
                        data-dt-column="0"
                        rowspan="1"
                        colspan="1"
                        class="dt-orderable-asc dt-orderable-desc"
                        aria-sort="ascending"
                        aria-label="S.L: Activate to invert sorting"
                        tabindex="0"
                      >
                        <span class="dt-column-title" role="button">
                          <div class="form-check style-check d-flex align-items-center">
                            <label class="form-check-label">
                              ФИО
                            </label>
                          </div>
                        </span>
                        <span class="dt-column-order"></span>
                      </th>
                      <th
                        scope="col"
                        data-dt-column="0"
                        rowspan="1"
                        colspan="1"
                        class="dt-orderable-asc dt-orderable-desc"
                        aria-sort="ascending"
                        aria-label="S.L: Activate to invert sorting"
                        tabindex="0"
                      >
                        <span class="dt-column-title" role="button">
                          <div class="form-check style-check d-flex align-items-center">
                            <label class="form-check-label">
                              Роль
                            </label>
                          </div>
                        </span>
                        <span class="dt-column-order"></span>
                      </th>
                      <th
                        scope="col"
                        data-dt-column="0"
                        rowspan="1"
                        colspan="1"
                        class="dt-orderable-asc dt-orderable-desc"
                        aria-sort="ascending"
                        aria-label="S.L: Activate to invert sorting"
                        tabindex="0"
                      >
                        <span class="dt-column-title" role="button">
                          <div class="form-check style-check d-flex align-items-center">
                            <label class="form-check-label">
                              Имя роли
                            </label>
                          </div>
                        </span>
                        <span class="dt-column-order"></span>
                      </th>
                      <th
                        scope="col"
                        data-dt-column="0"
                        rowspan="1"
                        colspan="1"
                        class="dt-orderable-asc dt-orderable-desc dt-ordering-asc"
                        aria-sort="ascending"
                        aria-label="S.L: Activate to invert sorting"
                        tabindex="0"
                      >
                        <span class="dt-column-title" role="button">
                          <div class="form-check style-check d-flex align-items-center">
                            <label class="form-check-label">
                              Действие
                            </label>
                          </div>
                        </span>
                      </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr
                      v-for="item in formData.members"
                      :key="item.id"
                    >
                      <td class="sorting_1">
                        <div class="form-check style-check d-flex align-items-center">
                          <label class="form-check-label">
                            {{ item.user_id }}
                          </label>
                        </div>
                      </td>
                      <td>{{ item.full_name || 'Еще не выбран' }}</td>
                      <td>{{ roles[item.role_type] }}</td>
                      <td>{{ item.role_name }}</td>
                      <td>
                        <template v-if="item.full_name">
                          <router-link :to="`/children/${item.user_id}/show`"
                                       class="w-32-px h-32-px bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center mx-4">
                            <Icon icon="iconamoon:eye-light"/>
                          </router-link>
                          <a
                            @click="rewardUser(item)"
                            class="w-32-px h-32-px bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center mx-4">
                            <Icon icon="streamline-freehand:money-bag"/>
                          </a>
                          <a
                            @click="deleteFromMovies(item.id)"
                            class="w-32-px h-32-px bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center mx-4">
                            <Icon icon="solar:close-circle-bold"/>
                          </a>
                        </template>
                        <!--                        <a-->
                        <!--                          @click=""-->
                        <!--                          class="w-32-px h-32-px bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center">-->
                        <!--                          <Icon icon="mingcute:delete-2-line"/>-->
                        <!--                        </a>-->
                      </td>
                    </tr>
                    </tbody>
                    <tfoot></tfoot>
                  </table>
                </div>
              </div>

              <div class="mt-24">
                <button @click="back()" type="button" class="border text-md px-56 py-11 radius-8">
                  Назад
                </button>
              </div>

            </div>
            <div :class="{active: route.params.name === 'request', show: route.params.name === 'request'}"
                 class="tab-pane fade" id="pills-request-profile" role="tabpanel"
                 aria-labelledby="pills-edit-profile-tab"
                 tabindex="1">

              <h6 class="text-md text-primary-light mb-16">Заявки на проект</h6>
              <div class="table-responsive scroll-sm">
                <div class="dt-layout-cell ">
                  <table
                    class="table bordered-table mb-0 dataTable"
                    id="dataTable1"
                    data-page-length="10"
                    aria-describedby="dataTable_info"
                  >
                    <colgroup>
                      <col data-dt-column="0" style="width: 70px;">
                      <col data-dt-column="0" style="width: 150px;">
                      <col data-dt-column="0" style="width: 150px;">
                      <col data-dt-column="0" style="width: 150px;">
                      <col data-dt-column="0" style="width: 200px;">
                    </colgroup>
                    <thead>
                    <tr role="row">
                      <th
                        scope="col"
                        data-dt-column="0"
                        rowspan="1"
                        colspan="1"
                        class="dt-orderable-asc dt-orderable-desc"
                        aria-sort="ascending"
                        aria-label="S.L: Activate to invert sorting"
                        tabindex="0"
                      >
                        <span class="dt-column-title" role="button">
                          <div class="form-check style-check d-flex align-items-center">
                            <label class="form-check-label">
                              ID
                            </label>
                          </div>
                        </span>
                        <span class="dt-column-order"></span>
                      </th>
                      <th
                        scope="col"
                        data-dt-column="0"
                        rowspan="1"
                        colspan="1"
                        class="dt-orderable-asc dt-orderable-desc"
                        aria-sort="ascending"
                        aria-label="S.L: Activate to invert sorting"
                        tabindex="0"
                      >
                        <span class="dt-column-title" role="button">
                          <div class="form-check style-check d-flex align-items-center">
                            <label class="form-check-label">
                              ФИО
                            </label>
                          </div>
                        </span>
                        <span class="dt-column-order"></span>
                      </th>
                      <th
                        scope="col"
                        data-dt-column="0"
                        rowspan="1"
                        colspan="1"
                        class="dt-orderable-asc dt-orderable-desc"
                        aria-sort="ascending"
                        aria-label="S.L: Activate to invert sorting"
                        tabindex="0"
                      >
                        <span class="dt-column-title" role="button">
                          <div class="form-check style-check d-flex align-items-center">
                            <label class="form-check-label">
                              Роль
                            </label>
                          </div>
                        </span>
                        <span class="dt-column-order"></span>
                      </th>
                      <th
                        scope="col"
                        data-dt-column="0"
                        rowspan="1"
                        colspan="1"
                        class="dt-orderable-asc dt-orderable-desc"
                        aria-sort="ascending"
                        aria-label="S.L: Activate to invert sorting"
                        tabindex="0"
                      >
                        <span class="dt-column-title" role="button">
                          <div class="form-check style-check d-flex align-items-center">
                            <label class="form-check-label">
                              Имя роли
                            </label>
                          </div>
                        </span>
                        <span class="dt-column-order"></span>
                      </th>
                      <th
                        scope="col"
                        data-dt-column="0"
                        rowspan="1"
                        colspan="1"
                        class="dt-orderable-asc dt-orderable-desc dt-ordering-asc"
                        aria-sort="ascending"
                        aria-label="S.L: Activate to invert sorting"
                        tabindex="0"
                      >
                        <span class="dt-column-title" role="button">
                          <div class="form-check style-check d-flex align-items-center">
                            <label class="form-check-label">
                              Действие
                            </label>
                          </div>
                        </span>
                      </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr
                      v-for="item in formData.applications"
                      :key="item.id"
                    >
                      <td class="sorting_1">
                        <div class="form-check style-check d-flex align-items-center">
                          <label class="form-check-label">
                            {{ item.user_id }}
                          </label>
                        </div>
                      </td>
                      <td>{{ item.full_name || 'Еще не выбран' }}</td>
                      <td>{{ roles[item.role_type] }}</td>
                      <td>{{ item.role_name }}</td>
                      <td>
                        <router-link :to="`/children/${item.user_id}/show`"
                                     class="w-32-px h-32-px bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center ma-2">
                          <Icon icon="iconamoon:eye-light"/>
                        </router-link>
                        <a
                          @click="approveChild(item.id)"
                          class="w-32-px h-32-px bg-success-focus text-success-main rounded-circle mx-10 d-inline-flex align-items-center justify-content-center">
                          <Icon icon="solar:check-circle-linear"/>
                        </a>
                        <a
                          @click="rejectChild(item.id)"
                          class="w-32-px h-32-px bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center">
                          <Icon icon="solar:close-circle-bold"/>
                        </a>
                      </td>
                    </tr>
                    </tbody>
                    <tfoot></tfoot>
                  </table>
                </div>
              </div>

              <div class="mt-24">
                <button @click="back()" type="button" class="border text-md px-56 py-11 radius-8">
                  Назад
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="rewardModalData" @click="closeModalReward()" class="modal fade show" id="exampleModal" tabindex="-1"
         aria-labelledby="exampleModalLabel" aria-modal="true" role="dialog" style="display: block;">
      <div @click.stop class="modal-dialog modal-lg modal-dialog modal-dialog-centered">
        <div class="modal-content radius-16 bg-base">
          <div class="modal-header py-16 px-24 border border-top-0 border-start-0 border-end-0">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Награждения</h1>
            <button @click="closeModalReward()" type="button" class="btn-close" data-bs-dismiss="modal"
                    aria-label="Close"></button>
          </div>
          <div class="modal-body p-24">
            <form @submit.prevent="saveRewardUser()">
              <div class="row">
                <div class="col-12 mb-10">
                  <label class="form-label fw-semibold text-primary-light text-sm mb-8">Коин</label>
                  <input v-model="rewardModalData.coin" type="text" class="form-control radius-8"
                         placeholder="Введите название">
                </div>

                <div class="d-flex align-items-center justify-content-center gap-3 mt-24">
                  <button @click="closeModalReward()" type="reset"
                          class="border border-danger-600 bg-hover-danger-200 text-danger-600 text-md px-40 py-11 radius-8">
                    Отмена
                  </button>
                  <button type="submit" class="btn btn-primary border border-primary-600 text-md px-48 py-12 radius-8">
                    Наградить
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div v-if="rewardModalData" class="modal-backdrop fade show"></div>
  </div>
</template>
<script setup>

import {onMounted, ref} from 'vue'
import api from '@/utils/api.js'
import {useRoute, useRouter} from 'vue-router'
import {useToast} from 'vue-toastification'
import {Icon} from '@iconify/vue'
import Cookies from 'js-cookie'
import Swal from "sweetalert2";
import Multiselect from "vue-multiselect";

const curators = ref([])
const route = useRoute()
const router = useRouter()
const toast = useToast()
const role = Cookies.get('admin-meyram-role') || null

const formData = ref({
  applications: [],
  members: [],
  movies: {
    title: "",
    author: "",
    genre: "",
    description: "",
    banner_url: "",
    trailer_url: "",
    author_avatar_url: "",
    banner: '',
    trailer: '',
    author_avatar: '',
    link_url: "",
    movie_type: "",
    participants_count: 0,
    roles_distribution: {
      main: [],
      supporting: [],
      extra: []
    },
    premiere_datetime: "",
    city: ""
  }
})
const roles = {
  main: 'Главная роль',
  extra: 'Основная роль',
  supporting: 'Дополнительная роль'
}
const cities = [
  "Астана",
  "Алматы",
  "Шымкент",
  "Актобе",
  "Караганда",
  "Павлодар",
  "Костанай",
  "Семей",
  "Тараз",
  "Оскемен",
  "Атырау",
  "Актау",
  "Кызылорда",
  "Петропавловск",
  "Талдыкорган"
]
const rewardModalData = ref(null)
const children = ref([])

const data = async () => {
  await api.get(`/movies/${route.params.id}`)
    .then((res) => {
      formData.value.movies = res.data.data
      formData.value.movies.roles_distribution = formData.value.movies.roles_distribution.map((e) => {
        return {
          ...e,
          user: children.value.find((child) => child.id === e.user_id)
        }
      })
      formData.value.movies.roles_distribution = {
        main: formData.value.movies.roles_distribution.filter((e) => e.role_type === 'main'),
        extra: formData.value.movies.roles_distribution.filter((e) => e.role_type === 'extra'),
        supporting: formData.value.movies.roles_distribution.filter((e) => e.role_type === 'supporting'),
      }
      formData.value.movies.premiere_datetime = res.data.data.premiere_datetime?.slice(0, 10)?.split('.')?.reverse()?.join('-')
      formData.value.movies.banner = ''
      formData.value.movies.trailer = ''
      formData.value.movies.author_avatar = ''
      formData.value.movies.banner_url = `https://meyram.kz/${formData.value.movies.banner_url}`
      formData.value.movies.trailer_url = `https://meyram.kz/${formData.value.movies.trailer_url}`
      formData.value.movies.author_avatar_url = `https://meyram.kz/${formData.value.movies.author_avatar_url}`
    })
    .catch((e) => {
      console.log(e, e.response, e.request)
    })
}
const dataMembers = async () => {
  await api.get(`/movies/${route.params.id}/members`)
    .then((res) => {
      formData.value.members = res.data.data
    })
    .catch((e) => {
      console.log(e, e.response, e.request)
    })
  await api.get(`/movies/${route.params.id}/applications`)
    .then((res) => {
      formData.value.applications = res.data.data
    })
    .catch((e) => {
      console.log(e, e.response, e.request)
    })
  await api.get('/admin/users')
    .then((res) => {
      children.value = res.data.data
    })
}

const openTab = (tab) => {
  router.replace({params: {name: tab}})
}

const back = () => {
  router.go(-1)
}
const cancel = () => {
  back()
}
const remove = () => {
  Swal.fire({
    title: "Удалить?",
    text: 'Внимание, процесс не обратим',
    showDenyButton: true,
    confirmButtonText: "Удалить",
    denyButtonText: `Отмена`
  }).then(async (result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      await api.delete(`/movies/${route.params.id}`)
      cancel()
    } else if (result.isDenied) {

    }
  })
}
const save = async () => {
  const formDataForm = new FormData()
  formDataForm.append('title', formData.value.movies.title)
  formDataForm.append('author', formData.value.movies.author)
  formDataForm.append('genre', formData.value.movies.genre)
  formDataForm.append('description', formData.value.movies.description)
  formDataForm.append('movie_type', formData.value.movies.movie_type)
  formDataForm.append('city', formData.value.movies.city)
  formDataForm.append('premiere_datetime', formData.value.movies.premiere_datetime?.slice(0, 10))
  formDataForm.append('total_members', Object.values(formData.value.movies.roles_distribution).reduce((a, c) => a + c.length, 0))
  formDataForm.append('main_roles', formData.value.movies.roles_distribution.main?.length || 0)
  formDataForm.append('support_roles', formData.value.movies.roles_distribution.supporting?.length || 0)
  formDataForm.append('extra_roles', formData.value.movies.roles_distribution.extra?.length || 0)
  formDataForm.append('banner', formData.value.movies.banner)
  formDataForm.append('trailer', formData.value.movies.trailer)
  formDataForm.append('author_avatar', formData.value.movies.author_avatar)
  const roles_distribution = []
  let count = 0
  Object.entries(formData.value.movies.roles_distribution).forEach((e) => {
    e[1].forEach((item) => {
      roles_distribution.push({
        "role_number": ++count,
        "role_type": e[0],
        "role_name": item.role,
        "user_id": item.user?.id,
        "full_name": item.user?.full_name,
        "avatar_url": item.user?.avatar_url,
        "description": item.description,
        "character_description": item.character_description
      })
    })
  })

  formDataForm.append('roles_distribution', JSON.stringify(roles_distribution))


  await api.put(`/movies/${route.params.id}`, formDataForm, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
    .then((res) => {
      toast.success('Успешно сохранено')
    })
    .catch((e) => {
      console.log(e, e.response, e.request)
    })
}
const getCurators = async () => {
  if (role === 'admin') {
    await api.get(`/admin/staff`)
      .then((res) => {
        curators.value = res.data.data
      })
      .catch((e) => {
        console.log(e, e.response, e.request)
      })
  }
}
const approveChild = async (id) => {
  await api.put(`/movies/${route.params.id}/applications/${id}`, {
    status: 'approved'
  })
    .then((res) => {
      toast.success('Успешно сохранено')
      data()
      dataMembers()
    })
    .catch((e) => {
      console.log(e, e.response, e.request)
    })
}
const rejectChild = async (id) => {
  await api.put(`/movies/${route.params.id}/applications/${id}`, {
    status: 'rejected'
  })
    .then((res) => {
      toast.success('Успешно сохранено')
      data()
      dataMembers()
    })
    .catch((e) => {
    })
}
const rewardUser = (item) => {
  rewardModalData.value = {
    ...item,
    coin: 0
  }
}
const closeModalReward = () => {
  rewardModalData.value = null
}
const saveRewardUser = async () => {
  await api.post(`/admin/movies/${route.params.id}/reward-user`, {
    user_id: rewardModalData.value.user_id,
    amount: rewardModalData.value.coin
  })
    .then((res) => {
      toast.success('Успешно награжден!')
      closeModalReward()
    })
    .catch((e) => {
      console.log(e, e.response, e.request)
    })
}
const deleteFromMovies = async (id) => {
  await api.delete(`/movies/${route.params.id}/members/${id}`, {
    status: 'rejected'
  })
    .then((res) => {
      toast.success('Успешно сохранено')
      data()
      dataMembers()
    })
    .catch((e) => {
      console.log(e, e.response, e.request)
    })
}
const addRoles = () => {
  formData.value.movies.roles_distribution = {
    main: [{
      name: '',
      role: ''
    }],
    extra: [{
      name: '',
      role: ''
    }],
    supporting: [{
      name: '',
      role: ''
    }],
  }
}
const addRole = (role) => {
  formData.value.movies.roles_distribution[role[0]].push({
    name: '',
    role: ''
  })
}
const removeRole = (role, index) => {
  formData.value.movies.roles_distribution[role[0]].splice(index, 1)
}
const fileChangeHandler = (e, index) => {
  const selectedFile = e?.target?.files?.[0]
  if (!selectedFile) return
  formData.value.movies[index] = selectedFile
  formData.value.movies[index + '_url'] = URL.createObjectURL(selectedFile)
}

onMounted(async () => {
  await dataMembers()
  await getCurators()
  await data()
})


</script>


<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>