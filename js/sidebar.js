/**
 * RedKiteCloud — sidebar.js
 * Single source of truth for ALL modules and topics.
 * Change here → updates everywhere automatically.
 */

const SIDEBAR_DATA = [
  {
    id: "azure-fundamentals",
    label: "Azure Fundamentals",
    icon: "☁️",
    topics: [
      { title: "What is Cloud Computing?",     file: "what-is-cloud-computing.html",  done: true  },
      { title: "IaaS, PaaS & SaaS",            file: "iaas-paas-saas.html",           done: true  },
      { title: "Cloud Types",                   file: "cloud-types.html",              done: true  },
      { title: "What is Azure?",                file: "what-is-azure.html",            done: true  },
      { title: "Global Infrastructure",         file: "global-infrastructure.html",    done: true  },
      { title: "Regions & Availability Zones",  file: "regions-availability-zones.html", done: false },
      { title: "Region Pairs",                  file: "region-pairs.html",             done: false },
      { title: "Azure Portal",                  file: "azure-portal.html",             done: false },
      { title: "Azure CLI",                     file: "azure-cli.html",                done: false },
      { title: "Azure PowerShell",              file: "azure-powershell.html",         done: false },
      { title: "Cloud Shell",                   file: "cloud-shell.html",              done: false },
      { title: "Pricing & Cost Management",     file: "pricing.html",                  done: false },
      { title: "Resource Groups",               file: "resource-groups.html",          done: false },
      { title: "Subscriptions",                 file: "subscriptions.html",            done: false },
      { title: "Management Groups",             file: "management-groups.html",        done: false },
    ]
  },
  {
    id: "azure-virtual-machines",
    label: "Azure Virtual Machines",
    icon: "🖥️",
    topics: [
      { title: "Overview",                      file: "overview.html",                 done: false },
      { title: "VM Sizes & Series",             file: "vm-sizes.html",                 done: false },
      { title: "Creating a VM",                 file: "create-vm.html",                done: false },
      { title: "VM Disks & Storage",            file: "vm-disks.html",                 done: false },
      { title: "VM Networking",                 file: "vm-networking.html",            done: false },
      { title: "Availability Sets",             file: "availability-sets.html",        done: false },
      { title: "Virtual Machine Scale Sets",    file: "vmss.html",                     done: false },
      { title: "VM Extensions",                 file: "vm-extensions.html",            done: false },
      { title: "Custom Script Extension",       file: "custom-script.html",            done: false },
      { title: "VM Backup",                     file: "vm-backup.html",                done: false },
      { title: "VM Monitoring",                 file: "vm-monitoring.html",            done: false },
      { title: "Reserved Instances",            file: "reserved-instances.html",       done: false },
      { title: "Spot VMs",                      file: "spot-vms.html",                 done: false },
      { title: "VM Pricing (India)",            file: "vm-pricing-india.html",         done: false },
    ]
  },
  {
    id: "azure-storage",
    label: "Azure Storage",
    icon: "🗄️",
    topics: [
      { title: "Storage Overview",              file: "storage-overview.html",         done: false },
      { title: "Blob Storage",                  file: "blob-storage.html",             done: false },
      { title: "File Storage",                  file: "file-storage.html",             done: false },
      { title: "Queue Storage",                 file: "queue-storage.html",            done: false },
      { title: "Table Storage",                 file: "table-storage.html",            done: false },
      { title: "Storage Tiers",                 file: "storage-tiers.html",            done: false },
      { title: "Storage Replication",           file: "storage-replication.html",      done: false },
      { title: "Storage Security",              file: "storage-security.html",         done: false },
      { title: "Azure Data Lake",               file: "data-lake.html",                done: false },
      { title: "Storage Pricing (India)",       file: "storage-pricing-india.html",    done: false },
    ]
  },
  {
    id: "azure-networking",
    label: "Azure Networking",
    icon: "🌐",
    topics: [
      { title: "Virtual Network (VNet)",        file: "vnet.html",                     done: false },
      { title: "Subnets",                       file: "subnets.html",                  done: false },
      { title: "Network Security Groups",       file: "nsg.html",                      done: false },
      { title: "Azure Load Balancer",           file: "load-balancer.html",            done: false },
      { title: "Application Gateway",           file: "application-gateway.html",      done: false },
      { title: "VPN Gateway",                   file: "vpn-gateway.html",              done: false },
      { title: "ExpressRoute",                  file: "expressroute.html",             done: false },
      { title: "Azure DNS",                     file: "azure-dns.html",                done: false },
      { title: "Azure Firewall",                file: "azure-firewall.html",           done: false },
      { title: "CDN",                           file: "cdn.html",                      done: false },
    ]
  },
  {
    id: "azure-databases",
    label: "Azure Databases",
    icon: "🗃️",
    topics: [
      { title: "Azure SQL Database",            file: "azure-sql.html",                done: false },
      { title: "Azure SQL Managed Instance",    file: "sql-managed-instance.html",     done: false },
      { title: "Cosmos DB",                     file: "cosmos-db.html",                done: false },
      { title: "Azure Database for MySQL",      file: "azure-mysql.html",              done: false },
      { title: "Azure Database for PostgreSQL", file: "azure-postgresql.html",         done: false },
      { title: "Azure Cache for Redis",         file: "azure-redis.html",              done: false },
      { title: "Database Pricing (India)",      file: "db-pricing-india.html",         done: false },
    ]
  },
  {
    id: "azure-app-service",
    label: "Azure App Service",
    icon: "🚀",
    topics: [
      { title: "App Service Overview",          file: "app-service-overview.html",     done: false },
      { title: "App Service Plans",             file: "app-service-plans.html",        done: false },
      { title: "Deployment Options",            file: "deployment-options.html",       done: false },
      { title: "Custom Domains & SSL",          file: "custom-domains-ssl.html",       done: false },
      { title: "Scaling App Service",           file: "scaling-app-service.html",      done: false },
      { title: "App Service Slots",             file: "deployment-slots.html",         done: false },
      { title: "App Service Pricing (India)",   file: "app-service-pricing-india.html", done: false },
    ]
  },
  {
    id: "azure-functions",
    label: "Azure Functions",
    icon: "⚡",
    topics: [
      { title: "Functions Overview",            file: "functions-overview.html",       done: false },
      { title: "Triggers & Bindings",           file: "triggers-bindings.html",        done: false },
      { title: "Durable Functions",             file: "durable-functions.html",        done: false },
      { title: "Function Pricing (India)",      file: "functions-pricing-india.html",  done: false },
    ]
  },
  {
    id: "azure-containers",
    label: "Azure Containers",
    icon: "📦",
    topics: [
      { title: "Container Instances (ACI)",     file: "container-instances.html",      done: false },
      { title: "Azure Kubernetes Service (AKS)",file: "aks.html",                      done: false },
      { title: "Azure Container Registry",      file: "container-registry.html",       done: false },
      { title: "Container Apps",                file: "container-apps.html",           done: false },
    ]
  },
  {
    id: "azure-identity-security",
    label: "Identity & Security",
    icon: "🔐",
    topics: [
      { title: "Azure Active Directory",        file: "azure-ad.html",                 done: false },
      { title: "Microsoft Entra ID",            file: "entra-id.html",                 done: false },
      { title: "Role-Based Access Control",     file: "rbac.html",                     done: false },
      { title: "Azure Key Vault",               file: "key-vault.html",                done: false },
      { title: "Microsoft Defender for Cloud",  file: "defender-for-cloud.html",       done: false },
      { title: "Azure Policy",                  file: "azure-policy.html",             done: false },
      { title: "Multi-Factor Authentication",   file: "mfa.html",                      done: false },
    ]
  },
  {
    id: "azure-monitoring",
    label: "Azure Monitoring",
    icon: "📊",
    topics: [
      { title: "Azure Monitor",                 file: "azure-monitor.html",            done: false },
      { title: "Log Analytics",                 file: "log-analytics.html",            done: false },
      { title: "Application Insights",          file: "application-insights.html",     done: false },
      { title: "Azure Alerts",                  file: "azure-alerts.html",             done: false },
      { title: "Azure Dashboards",              file: "azure-dashboards.html",         done: false },
    ]
  },
  {
    id: "azure-devops",
    label: "Azure DevOps",
    icon: "🔄",
    topics: [
      { title: "Azure DevOps Overview",         file: "devops-overview.html",          done: false },
      { title: "Azure Repos",                   file: "azure-repos.html",              done: false },
      { title: "Azure Pipelines",               file: "azure-pipelines.html",          done: false },
      { title: "Azure Boards",                  file: "azure-boards.html",             done: false },
      { title: "Azure Artifacts",               file: "azure-artifacts.html",          done: false },
      { title: "GitHub Actions with Azure",     file: "github-actions-azure.html",     done: false },
    ]
  },
  {
    id: "azure-ai-ml",
    label: "Azure AI & ML",
    icon: "🤖",
    topics: [
      { title: "Azure AI Services Overview",    file: "ai-services-overview.html",     done: false },
      { title: "Azure Machine Learning",        file: "azure-ml.html",                 done: false },
      { title: "Azure OpenAI Service",          file: "azure-openai.html",             done: false },
      { title: "Azure Cognitive Services",      file: "cognitive-services.html",       done: false },
      { title: "Azure Bot Service",             file: "bot-service.html",              done: false },
    ]
  },
  {
    id: "azure-integration",
    label: "Azure Integration",
    icon: "🔗",
    topics: [
      { title: "Azure Service Bus",             file: "service-bus.html",              done: false },
      { title: "Azure Event Grid",              file: "event-grid.html",               done: false },
      { title: "Azure Event Hubs",              file: "event-hubs.html",               done: false },
      { title: "Azure Logic Apps",              file: "logic-apps.html",               done: false },
      { title: "Azure API Management",          file: "api-management.html",           done: false },
    ]
  },
  {
    id: "azure-architecture",
    label: "Azure Architecture",
    icon: "🏗️",
    topics: [
      { title: "Well-Architected Framework",    file: "well-architected.html",         done: false },
      { title: "Cloud Adoption Framework",      file: "cloud-adoption.html",           done: false },
      { title: "High Availability Patterns",    file: "high-availability.html",        done: false },
      { title: "Disaster Recovery",             file: "disaster-recovery.html",        done: false },
      { title: "Azure Landing Zones",           file: "landing-zones.html",            done: false },
    ]
  }
];

/**
 * Resolves the correct base path for docs links depending on
 * whether we are on index.html (root) or a docs/* page.
 */
function getBasePath() {
  const path = window.location.pathname;
  if (path.endsWith('index.html') || path === '/' || path.endsWith('/redkitecloud/')) {
    return 'docs/';
  }
  // We're inside docs/<module>/ — go up two levels
  return '../';
}

/**
 * Detects the current page's module and file so we can
 * auto-open and highlight the active sidebar link.
 */
function getCurrentPage() {
  const parts = window.location.pathname.split('/').filter(Boolean);
  const file  = parts[parts.length - 1] || '';
  const mod   = parts[parts.length - 2] || '';
  return { module: mod, file };
}

/**
 * Renders the sidebar into #sidebar element.
 */
function renderSidebar() {
  const sidebar = document.getElementById('sidebar');
  if (!sidebar) return;

  const basePath   = getBasePath();
  const { module: currentMod, file: currentFile } = getCurrentPage();

  let html = '';

  SIDEBAR_DATA.forEach(mod => {
    const doneCount  = mod.topics.filter(t => t.done).length;
    const total      = mod.topics.length;
    const pct        = Math.round((doneCount / total) * 100);
    const isActive   = mod.id === currentMod;

    html += `
      <div class="sidebar-module${isActive ? ' open' : ''}" data-module="${mod.id}">
        <div class="sidebar-module-header" onclick="toggleModule('${mod.id}')">
          <span>${mod.icon}&nbsp;&nbsp;${mod.label}</span>
          <svg class="chevron" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M2 4l4 4 4-4"/>
          </svg>
        </div>
        <div class="sidebar-progress">
          <span>${doneCount}/${total}</span>
          <div class="sidebar-progress-bar">
            <div class="sidebar-progress-fill" style="width:${pct}%"></div>
          </div>
        </div>
        <div class="sidebar-topics">
    `;

    mod.topics.forEach(topic => {
      const href      = topic.done
        ? `${basePath}${mod.id}/${topic.file}`
        : '#';
      const isCurrentFile = topic.file === currentFile;
      const activeClass   = isCurrentFile ? ' active' : '';
      const dimmed        = !topic.done ? ' style="opacity:0.45;cursor:default;"' : '';

      html += `
        <a class="sidebar-link${activeClass}" href="${href}"${dimmed}>
          ${topic.title}
          ${!topic.done ? '<span style="font-size:0.6rem;margin-left:auto;color:var(--text-muted);">SOON</span>' : ''}
        </a>
      `;
    });

    html += `</div></div>`;
  });

  sidebar.innerHTML = html;
}

/**
 * Toggle a module open/closed.
 */
function toggleModule(moduleId) {
  const el = document.querySelector(`[data-module="${moduleId}"]`);
  if (el) el.classList.toggle('open');
}

// Init on DOM ready
document.addEventListener('DOMContentLoaded', renderSidebar);
