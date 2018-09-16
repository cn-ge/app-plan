import { CONFIG } from "../config";

export const API = {
    'user' :                             (CONFIG.backend_eniplanning_url + 'user'),   
    'password' :                         (CONFIG.backend_eniplanning_url + 'password'),   
    'login' :                            (CONFIG.backend_eniplanning_url + 'login'), 
    'backend_status_eniplanning' :       (CONFIG.backend_eniplanning_url + 'backend-status'), 
    'db_status_eniplanning' :            (CONFIG.backend_eniplanning_url + 'db-status'), 
    'logs' :                             (CONFIG.backend_eniplanning_url + 'activity-log'),
    'purge_logs' :                       (CONFIG.backend_eniplanning_url + 'activity-logpurge'),
    'complementary_module':              (CONFIG.backend_eniplanning_url + 'complementaryModule'),
    'complementary_course':              (CONFIG.backend_eniplanning_url + 'complementaryCourse'),
    'cours_planning':                    (CONFIG.backend_eniplanning_url + 'planningcoursebyplanning'),
    'planning':                          (CONFIG.backend_eniplanning_url + 'planning'),
    'planningByStagiaire':               (CONFIG.backend_eniplanning_url + 'planningsByCodeStagiaire'),
    'planningById':                      (CONFIG.backend_eniplanning_url + 'planningGlobal'),
    'ctrDisponibility':                  (CONFIG.backend_eniplanning_url + 'ctrDisponibility'),

    
    'titre' :                       (CONFIG.backend_enierp_url + 'titre'),
    'lieu' :                        (CONFIG.backend_enierp_url + 'lieu'),
    'stagiaire' :                   (CONFIG.backend_enierp_url + 'stagiaire'),
    'formation' :                   (CONFIG.backend_enierp_url + 'formation'),
    'formationGlobal' :             (CONFIG.backend_enierp_url + 'formationGlobal'),
    'formationByPeriodLieu':        (CONFIG.backend_enierp_url + 'formationByPeriodLieu'),
    'stagiaireParEntreprise':       (CONFIG.backend_enierp_url + 'stagiaireparentreprise'),
    'entreprise':                   (CONFIG.backend_enierp_url + 'entreprise'),
    'module':                       (CONFIG.backend_enierp_url + 'getModuleByLibelleCourt'),
    'backend_status_erp' :          (CONFIG.backend_enierp_url + 'backend-status'), 
    'db_status_erp' :               (CONFIG.backend_enierp_url + 'db-status'), 
};