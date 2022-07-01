// Don't edit manually. `rake js:routes` generates this file.
type Value = string | number
type Params<Keys extends string> = { [key in Keys]: Value } & Record<string, Value>
function process(route: string, params: Record<string, Value> | undefined, keys: string[]): string {
  if (!params) return route
  var query: string[] = [];
  for (var param in params) if (params.hasOwnProperty(param)) {
    if (keys.indexOf(param) === -1) {
      query.push(param + "=" + encodeURIComponent(params[param].toString()));
    }
  }
  return query.length ? route + "?" + query.join("&") : route;
}

export function rails_mailers_path(params?: Record<string, Value>) { return process('/rails/mailers', params, []); }
export function rails_info_properties_path(params?: Record<string, Value>) { return process('/rails/info/properties', params, []); }
export function rails_info_routes_path(params?: Record<string, Value>) { return process('/rails/info/routes', params, []); }
export function rails_info_path(params?: Record<string, Value>) { return process('/rails/info', params, []); }
export function new_admin_user_session_path(params?: Record<string, Value>) { return process('/admin/login', params, []); }
export function admin_user_session_path(params?: Record<string, Value>) { return process('/admin/login', params, []); }
export function destroy_admin_user_session_path(params?: Record<string, Value>) { return process('/admin/logout', params, []); }
export function new_admin_user_password_path(params?: Record<string, Value>) { return process('/admin/password/new', params, []); }
export function edit_admin_user_password_path(params?: Record<string, Value>) { return process('/admin/password/edit', params, []); }
export function admin_user_password_path(params?: Record<string, Value>) { return process('/admin/password', params, []); }
export function admin_root_path(params?: Record<string, Value>) { return process('/admin', params, []); }
export function batch_action_admin_admin_users_path(params?: Record<string, Value>) { return process('/admin/admin_users/batch_action', params, []); }
export function admin_admin_users_path(params?: Record<string, Value>) { return process('/admin/admin_users', params, []); }
export function new_admin_admin_user_path(params?: Record<string, Value>) { return process('/admin/admin_users/new', params, []); }
export function edit_admin_admin_user_path(params: Params<'id'>) { return process('/admin/admin_users/' + params.id + '/edit', params, ['id']); }
export function admin_admin_user_path(params: Params<'id'>) { return process('/admin/admin_users/' + params.id + '', params, ['id']); }
export function admin_dashboard_path(params?: Record<string, Value>) { return process('/admin/dashboard', params, []); }
export function admin_comments_path(params?: Record<string, Value>) { return process('/admin/comments', params, []); }
export function admin_comment_path(params: Params<'id'>) { return process('/admin/comments/' + params.id + '', params, ['id']); }
export function new_user_session_path(params?: Record<string, Value>) { return process('/users/sign_in', params, []); }
export function user_session_path(params?: Record<string, Value>) { return process('/users/sign_in', params, []); }
export function destroy_user_session_path(params?: Record<string, Value>) { return process('/users/sign_out', params, []); }
export function new_user_password_path(params?: Record<string, Value>) { return process('/users/password/new', params, []); }
export function edit_user_password_path(params?: Record<string, Value>) { return process('/users/password/edit', params, []); }
export function user_password_path(params?: Record<string, Value>) { return process('/users/password', params, []); }
export function cancel_user_registration_path(params?: Record<string, Value>) { return process('/users/cancel', params, []); }
export function new_user_registration_path(params?: Record<string, Value>) { return process('/users/sign_up', params, []); }
export function edit_user_registration_path(params?: Record<string, Value>) { return process('/users/edit', params, []); }
export function user_registration_path(params?: Record<string, Value>) { return process('/users', params, []); }
export function root_path(params?: Record<string, Value>) { return process('/', params, []); }
export function settings_path(params?: Record<string, Value>) { return process('/settings', params, []); }
export function search_path(params?: Record<string, Value>) { return process('/search', params, []); }
export function edit_score_path(params: Params<'id'>) { return process('/score/' + params.id + '/edit', params, ['id']); }
export function score_path(params: Params<'id'>) { return process('/score/' + params.id + '', params, ['id']); }
export function musics_path(params?: Record<string, Value>) { return process('/musics', params, []); }
export function new_music_path(params?: Record<string, Value>) { return process('/musics/new', params, []); }
export function edit_music_path(params: Params<'id'>) { return process('/musics/' + params.id + '/edit', params, ['id']); }
export function music_path(params: Params<'id'>) { return process('/musics/' + params.id + '', params, ['id']); }
export function bands_path(params?: Record<string, Value>) { return process('/bands', params, []); }
export function new_band_path(params?: Record<string, Value>) { return process('/bands/new', params, []); }
export function edit_band_path(params: Params<'id'>) { return process('/bands/' + params.id + '/edit', params, ['id']); }
export function band_path(params: Params<'id'>) { return process('/bands/' + params.id + '', params, ['id']); }
export function users_path(params?: Record<string, Value>) { return process('/users', params, []); }
export function user_path(params: Params<'id'>) { return process('/users/' + params.id + '', params, ['id']); }
export function albums_path(params?: Record<string, Value>) { return process('/albums', params, []); }
export function new_album_path(params?: Record<string, Value>) { return process('/albums/new', params, []); }
export function edit_album_path(params: Params<'id'>) { return process('/albums/' + params.id + '/edit', params, ['id']); }
export function album_path(params: Params<'id'>) { return process('/albums/' + params.id + '', params, ['id']); }
export function artists_path(params?: Record<string, Value>) { return process('/artists', params, []); }
export function new_artist_path(params?: Record<string, Value>) { return process('/artists/new', params, []); }
export function edit_artist_path(params: Params<'id'>) { return process('/artists/' + params.id + '/edit', params, ['id']); }
export function artist_path(params: Params<'id'>) { return process('/artists/' + params.id + '', params, ['id']); }
export function turbo_recede_historical_location_path(params?: Record<string, Value>) { return process('/recede_historical_location', params, []); }
export function turbo_resume_historical_location_path(params?: Record<string, Value>) { return process('/resume_historical_location', params, []); }
export function turbo_refresh_historical_location_path(params?: Record<string, Value>) { return process('/refresh_historical_location', params, []); }
export function rails_postmark_inbound_emails_path(params?: Record<string, Value>) { return process('/rails/action_mailbox/postmark/inbound_emails', params, []); }
export function rails_relay_inbound_emails_path(params?: Record<string, Value>) { return process('/rails/action_mailbox/relay/inbound_emails', params, []); }
export function rails_sendgrid_inbound_emails_path(params?: Record<string, Value>) { return process('/rails/action_mailbox/sendgrid/inbound_emails', params, []); }
export function rails_mandrill_inbound_health_check_path(params?: Record<string, Value>) { return process('/rails/action_mailbox/mandrill/inbound_emails', params, []); }
export function rails_mandrill_inbound_emails_path(params?: Record<string, Value>) { return process('/rails/action_mailbox/mandrill/inbound_emails', params, []); }
export function rails_mailgun_inbound_emails_path(params?: Record<string, Value>) { return process('/rails/action_mailbox/mailgun/inbound_emails/mime', params, []); }
export function rails_conductor_inbound_emails_path(params?: Record<string, Value>) { return process('/rails/conductor/action_mailbox/inbound_emails', params, []); }
export function new_rails_conductor_inbound_email_path(params?: Record<string, Value>) { return process('/rails/conductor/action_mailbox/inbound_emails/new', params, []); }
export function edit_rails_conductor_inbound_email_path(params: Params<'id'>) { return process('/rails/conductor/action_mailbox/inbound_emails/' + params.id + '/edit', params, ['id']); }
export function rails_conductor_inbound_email_path(params: Params<'id'>) { return process('/rails/conductor/action_mailbox/inbound_emails/' + params.id + '', params, ['id']); }
export function new_rails_conductor_inbound_email_source_path(params?: Record<string, Value>) { return process('/rails/conductor/action_mailbox/inbound_emails/sources/new', params, []); }
export function rails_conductor_inbound_email_sources_path(params?: Record<string, Value>) { return process('/rails/conductor/action_mailbox/inbound_emails/sources', params, []); }
export function rails_conductor_inbound_email_reroute_path(params: Params<'inbound_email_id'>) { return process('/rails/conductor/action_mailbox/' + params.inbound_email_id + '/reroute', params, ['inbound_email_id']); }
export function rails_conductor_inbound_email_incinerate_path(params: Params<'inbound_email_id'>) { return process('/rails/conductor/action_mailbox/' + params.inbound_email_id + '/incinerate', params, ['inbound_email_id']); }
export function rails_service_blob_path(params: Params<'signed_id'>) { return process('/rails/active_storage/blobs/redirect/' + params.signed_id + '/*filename', params, ['signed_id']); }
export function rails_service_blob_proxy_path(params: Params<'signed_id'>) { return process('/rails/active_storage/blobs/proxy/' + params.signed_id + '/*filename', params, ['signed_id']); }
export function rails_blob_representation_path(params: Params<'signed_blob_id' | 'variation_key'>) { return process('/rails/active_storage/representations/redirect/' + params.signed_blob_id + '/' + params.variation_key + '/*filename', params, ['signed_blob_id','variation_key']); }
export function rails_blob_representation_proxy_path(params: Params<'signed_blob_id' | 'variation_key'>) { return process('/rails/active_storage/representations/proxy/' + params.signed_blob_id + '/' + params.variation_key + '/*filename', params, ['signed_blob_id','variation_key']); }
export function rails_disk_service_path(params: Params<'encoded_key'>) { return process('/rails/active_storage/disk/' + params.encoded_key + '/*filename', params, ['encoded_key']); }
export function update_rails_disk_service_path(params: Params<'encoded_token'>) { return process('/rails/active_storage/disk/' + params.encoded_token + '', params, ['encoded_token']); }
export function rails_direct_uploads_path(params?: Record<string, Value>) { return process('/rails/active_storage/direct_uploads', params, []); }
